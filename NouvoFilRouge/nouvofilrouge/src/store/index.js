import { createStore } from 'vuex';

import UserDataService from "../services/UserDataService";


let user = localStorage.getItem('user');
if (!user){
    user = {
        userId: -1,
        token:'',
    };
}else{
    try{
        user = JSON.parse(user);
    }catch (ex){
    user = {
        userId: -1,
        token:'',
        };
    }
}

const store = createStore({
    state: {       
        status:'',
        user: user,
        userInfos:{
            email:'',
            password:'',
        }
    },
    mutations:{
        setStatus(state, status){
            state.status = status;
        },
        logUser(state, user){
            localStorage.setItem('user', JSON.stringify(user));
            state.user = user;
        },
        userInfos(state, userInfos) {
            state.userInfos = userInfos;
        },
    },
    actions:{
        login:({commit}, userInfos) => {
            commit('setStatus', 'loading');
            return new Promise((resolve, reject) => {
            UserDataService.read(userInfos)
            .then(function (response){
                commit('setStatus', '');
                commit('logUser', response.userInfos);
                resolve(response);
            })
            .catch(function (error) {
                commit('setStatus', 'error_login');
                reject(error);
            });
            });
        },
        createAccount:({commit}, userInfos) => {
            commit('setStatus', 'loading');
            return new Promise((resolve, reject) => {
            commit;
            UserDataService.create(userInfos)
            .then(function (response) {
                commit('setStatus', 'created');
                resolve(response);
            })
            .catch(function (error){
                commit('setStatus', 'error_create');
                reject(error);
            });
            });
        },
        getUserInfos:({commit}) =>{
            UserDataService.getAll('/infos')
            .then(function (response){
                commit('userInfos', response.userInfos.infos);
            })
            .catch(function (){
            });
        },
        logOut(state) {
            state.user ={
            userId : - 1,
            token:'',
            },
            this.reset();
        }
    }
})

export default store;