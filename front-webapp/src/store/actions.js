import * as api from '../api'

export const getUserInfo = ({ commit }) => {
    return new Promise((resolve, reject) => {
        api.getUserInfo(msg => {
            commit('getUserInfo', { msg })
            resolve()
        })
    })
}