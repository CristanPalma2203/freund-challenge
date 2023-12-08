import repo from "./EndpointRepository";
import ExceptionInterceptor from "./ExceptionInterceptor";
import axios from "axios";

const api = function (store, endpoint) {
	var endpoints = repo.get();
	var value = endpoints[endpoint];

	const client = axios.create({
		baseURL: value,
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
			"Access-Control-Allow-Origin": "*",
			responseType: "blob",
		},
	});

	store.subscribe(listener);

	function listener() {
		let state = store.getState();

		const user = state.user;
		const token = user ? (user.token ? user.token : null) : null;

		let headerAuth = `Bearer ${token}`;

		if (token) {
			client.defaults.headers.common["Authorization"] = headerAuth;
		}
	}
	listener();
	ExceptionInterceptor(client);
	return client;
};
const configureFiles = function (store, endpoint, url) {
	var endpoints = repo.get();
	url = endpoints[endpoint] + "" + url;
	let state = store.getState();
	const user = state.user;
	const token = user ? (user.token ? user.token : null) : null;

	let headerAuth = `Bearer ${token}`;

	if (token) {
		axios.defaults.headers.common["Authorization"] = headerAuth;
	}
	const method = "GET";
	return axios.request({
		url,
		method,
		responseType: "blob", //important
	});
};
const configPublicDownloadPdf = function (store, endpoint, url) {
	var endpoints = repo.get();
	url = endpoints[endpoint] + "" + url;
	let state = store.getState();

	const method = "GET";
	return axios.request({
		url,
		method,
		responseType: "blob", //important
	});
};
export default { api, configureFiles, configPublicDownloadPdf };
