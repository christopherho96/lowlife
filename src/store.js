import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLoggedIn: false
    },

    getters: {
        checkLogInState(state){
            return state.isLoggedIn
        }
    },

    mutations: {
        setLogInState(state, auth){
            state.isLoggedIn = auth
        }

    },
    actions: {
        setLogInState(context, auth){
            context.commit('setLogInState', auth)
        }
    }
})