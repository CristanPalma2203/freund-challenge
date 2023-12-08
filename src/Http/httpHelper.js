import ApiClientFactory from "./ApiClientFactory";
import configureStore from "../configureStore";
const { store } = configureStore;
const apiBackend = ApiClientFactory.api(store, "backend");


export default {
	apiBackend,
};
