
const app = new Vue({
	el: "#result",
	data: {
		items: null
	},
	mounted() {
		axios.get("drawList.json").then(response => (this.items = response.data));
	},
	methods: {
		showWindow: function(e) {
			console.log(e, this);
		}
	}
});
