export default {
	getUsers() {
		const persit = JSON.parse(window.localStorage.getItem("persist:root"));
		if (persit) {
			const user = persit.user ? JSON.parse(persit.user) : null;
			return user;
		}
		return null;
	},
	delete() {
		window.localStorage.removeItem("persist:root");
	},
	save(endpoints) {
		window.localStorage.setItem(
			"endpoints",
			JSON.stringify({ endpoints: endpoints }),
		);
	},
	get() {
		return JSON.parse(window.localStorage.getItem("endpoints")).endpoints;
	},
};
