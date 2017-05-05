import * as api from '../api'

export const getUserInfo = ({ commit }, { username }) => {
    return new Promise((resolve, reject) => {
        api.getUserInfo(username, msg => {
            commit('getUserInfo', { msg })
            resolve()
        })
    })
}

export const getUserDetail = ({ commit }, { username }) => {
    return new Promise((resolve, reject) => {
        api.getUserDetail(username, msg => {
            commit('getUserDetail', { msg })
            resolve()
        })
    })
}