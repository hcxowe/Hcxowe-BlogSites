import * as api from '../api'

export const getUserInfo = ({ commit }, { username }) => {
    return new Promise((resolve, reject) => {
        api.getUserInfo(username, msg => {
            commit('getUserInfo', { msg })
            resolve()
        })
    })
}