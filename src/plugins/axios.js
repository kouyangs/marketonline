import Vue from 'vue';
import axios from 'axios';
import store from '../store';


if (store.getters['AuthUser/isAuth']) {
    axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + store.getters['AuthUser/getToken'];
}

export const adminaxios = axios.create({
    baseURL: process.env.VUE_APP_BASE_API_URL,
});

Vue.prototype.$axios = adminaxios;