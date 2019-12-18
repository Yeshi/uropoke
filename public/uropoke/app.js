var app = new Vue({
  el: "#result",
  data: {
    items: null,
  },
  mounted() {
    axios.get("drawList.json").then(response => (this.items = response.data));
  },
});
