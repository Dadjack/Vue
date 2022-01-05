import { createStore } from 'vuex';
import firebase from 'firebase/app';

// let user = localStorage.getItem('user');
// if (!user){
//     user = {
//         userId: -1,
//         token:'',
//     };
// }else{
//     try{
//         user = JSON.parse(user);
//     }catch (ex){
//     user = {
//         userId: -1,
//         token:'',
//         };
//     }
// }

const initialState = () => { 
    return { utilisateur : null, erreur : null } ; 
};

const store = createStore({
    state: initialState(), 
        mutations:{
            setUser(state, payload) {
                // localStorage.setItem('user', JSON.stringify(user));
                state.user = payload;
            },
            setError(state, payload) {
                state.error = payload;
            }
        },
        getters:{
            getUser(state) {
                return state.user;
            },
            isUserAuth(state) {
                return !!state.user;
            },
            getError(state) {
                return state.error;
            }
        },
        actions:{
            authAction({ commit }) {
                firebase
                .auth()
                .onAuthStateChanged(user => {
                    if (user) {
                        commit("setUser", user);
                    } else {
                        commit("setUser", null);
                    }
                });
            },
            signUpAction({ commit }, payload ) { 
                    firebase 
                    .auth() 
                    .createUserWithEmailAndPassword(payload.email, payload.password) 
                    .then(function (response)  {
                        commit("setUser", response.user); 
                        // @TODO muter l'état de l'utilisateur.
                    }) 
                    .catch( function (error) { 
                        commit("setError", error.message);
                        // @TODO muter l'état d'erreur
                    }) 
            },
            signInAction({ commit }, payload) {
                    firebase
                    .auth()
                    .signInWithEmailAndPassword(payload.email, payload.password)
                    .then(function (response) {
                        commit("setUser", response.user);
                    })
                    .catch(function (error) {
                        commit("setError", error.message);
                    });
            },
            signOutAction({ commit }) {
                    firebase
                    .auth()
                    .signOut()
                    .then(() => {
                        commit("setUser", null);
                    })
                    .catch(error => {
                        commit("setError", error.message);
                    });
                }
        }
})


export default store;