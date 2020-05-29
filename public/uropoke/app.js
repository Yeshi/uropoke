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
    total: function(){return this.items.length}
  },
  methods: {
    clickobj: function (index) {
			console.log(this.isActive, index);
			this.isActive = index;
    },
  },
});
