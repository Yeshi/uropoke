const detailElm = { template: "<div>{{ $route.params.no }}</div>" };
const routers = {
	path: "/detail:no",
	component: detailElm
};

const router = new VueRouter({
	routers
});

const app = new Vue({
	router,
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
