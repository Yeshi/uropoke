const app = new Vue({
  el: "#result",
  data: {
    items: {},
    isActive: undefined,
  },
  mounted() {
    axios.get("drawList.json").then((response) => (this.items = response.data));
  },
  computed: {
    // いくつ描き終えた？
    counter: function () {
      let count = 0;
      if (this.items) {
        for (let i = 0; i < this.items.length; i++) {
          if (this.items[i].drawings.length) {
            count++;
          }
        }
      }
      return count;
    },
    total: function () { return this.items.length },
    todayItem: function(){return this.yetList()}
  },
  methods: {
    clickobj: function (index) {
      // console.log(this.isActive, index);
      this.isActive = index;
    },
    yetList: function () {
      let yetList = [];
      let count = 0;
      let nowDate = new Date();
      let dateStr = "";
      dateStr = Number(String(nowDate.getFullYear()) + String(nowDate.getMonth() + 1) + String(nowDate.getDate()));

      for (let i = 0; i < this.items.length; i++) {
        if (!this.items[i].drawings.length) {
          yetList[count] = this.items[i].pokeName;
          count++
        }
      }
      let chance = new Chance(dateStr);
      let todayItem = chance.natural({min:0,max:yetList.length-1});
      // console.log(yetList,dateStr,todayItem,yetList[todayItem]);
      return todayItem,yetList[todayItem];
    },
    copyText: function(){
      let copyText = "今日は" + this.todayItem + "を見ないで描きました　#うろポケ";
      // console.log(copyText);
      navigator.clipboard.writeText(copyText);
    }
  },
});
