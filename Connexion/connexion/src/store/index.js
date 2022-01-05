import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

    Vue.use(Vuex)

    const state = {
    username: null,
    email,
    token: null
    }

    const mutations = {
    SET_USER (state, user) {
        state.user = user
    },
    SET_TOKEN (state, token) {
        state.token = token
    },
    GET_TOKEN (state) {
        return state.token
    },
    LOGIN (state, username, password) {
        axios.get('http://monsite.com/index.php?section=login&page=login&username=' + username + '&password=aze').then((response) => {
            if (Object.keys(response.data.results).length === 0) {
            state.username = ''
            state.token = ''
            console.log('Connect False')
            return false
        } else {
            state.username = response.data.results.login.username
            state.token = response.data.results.login.token
            console.log('Connect : ' + state.token)
            return response.data.results.login.token
        }
        })
    }
    }

    export default new Vuex.Store({
    state,
    mutations
    })