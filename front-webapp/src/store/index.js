import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
    userInfo: {
        // userName: 'hcxowe',
        // description: 'this is description',
        // displayItem: []
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})