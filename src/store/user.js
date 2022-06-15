import client from 'axios';
import router from '../router/index';

const axios = client.create({
    baseURL: process.env.VUE_APP_BASE_API_URL,
});

const state = {
    token: localStorage.getItem('access_token') || null,
};

const getters = {
    isAuth(state) {
        return state.token && state.token !== null;
    },
    getToken(state) {
        return state.token;
    },
};

const mutations = {
    AdminSignin(state, token) {
        state.token = token
    },
};

const actions = {
    UserLogin(context, data) {
        return new Promise((resolve, reject) => {
            axios.post('/auth/login', {
                email: data.email,
                password: data.password
            })
            .then(response => {
                resolve(response);
                
                const token = response.data.access_token;
                localStorage.setItem('access_token', token);   // ເກັບ Token ໄວ້ໃນ Localstorage ເພື່ອຈະນຳໄປໃຊ້ຂໍຂໍ້ມູນ
                context.commit('AdminSignin', token);
                
                router.push({name: 'Dashboard'});
                
                setTimeout(() => {
                    window.location.reload();
                }, 300);
            })
            .catch(error => {
                reject(error)
            })
        })
    },


};


export default {
   namespaced: true,
   state,
   getters,
   mutations,
   actions
}