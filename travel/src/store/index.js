import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import mutations from './mutations.js'

Vue.use(Vuex)

export default new Vuex.Store({
    /*state: {
        city: defaultCity
    },*/
    state: state,

    /*actions: {
        changeCity(ctx, city) {
            ctx.commit('changeCity', city);
        }
    },*/

    mutations: mutations,

    getters: {
        doubleCity(state) {
            return state.city + ' ' + state.city;
        }
    }
})