const detailElm = { template: "<div>test</div>" };
const routers = {
	path: "/detail",
	component: detailElm
};

const router = new VueRouter({
	routers
});

var app = new Vue({
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
