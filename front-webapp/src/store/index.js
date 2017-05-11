import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import blogHomeStore from './modules/blogHome/index'

Vue.use(Vuex)

const state = {
    userInfo: {
        userName: '',
        description: '',
        displayItem: {
            sitesInner: [],
            sitesOuter: []
        }
    },
    userDetail: {
        name: '',
        description: '',
        address: '',
        school: {
            url: '',
            name: ''
        },
        email: '',
        brithday: '',
        intro: '',
        faceImg: ''
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
        'blogHome': blogHomeStore
    }
})