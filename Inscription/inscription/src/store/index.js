import { createStore } from 'vuex';

const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://vue-firebase-d764b-default-rtdb.firebaseio.com'
});


let user = localStorage.getItem('user');
if (!user){
    user = {
        userId: -1,
        token:'',
    };
}else{
    try{
        user = JSON.parse(user);
        instance.defaults.headers.common['Authorization'] = user.token;
    }catch (ex){
    user = {
        userId: -1,
        token:'',
        };
    }
}

// app.header('Access-Control-Allow-Origin','*');

// app.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE');

// app.header('Access-Control-Allow-Headers','Origin,Content-Type,X-Requested-With,Accept,Authorization');

//Créer une nouvelle instance de store
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
            instance.defaults.headers.common['Authorization'] = user.token;
            localStorage.setItem('user', JSON.stringify(user));
            state.user = user;
        },
        userInfos(state, userInfos) {
            state.userInfos = userInfos;
        },
        logOut(state){
            state.user = {
                userId: -1,
                token:'',
            }
            localStorage.removeItem('user');
        }
    },
    actions:{
        login:({commit}, userInfos) => {
            commit('setStatus', 'loading');
            return new Promise((resolve, reject) => {
            instance.post('/login',userInfos)
            .then(function (response){
                commit('setStatus', '');
                commit('logUser', response.data);
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
            instance.post('/createAccount', userInfos)
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
            instance.post('/infos')
            .then(function (response){
                commit('userInfos', response.data.infos);
            })
            .catch(function (){
            });
        }
    }
})

export default store;
