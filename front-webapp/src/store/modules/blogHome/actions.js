import * as types from './types'
import * as api from '../../../api/index'

export default {
    [types.BLOGHOME_GET_JOTTINGS]: function({ commit }, { username }) {
        return new Promise((resolve, reject) => {
            api.getJottings(username, (ret) => {
                if (ret.ret != 0) {
                    reject();
                    return;
                }

                commit(types.BLOGHOME_GET_JOTTINGS, ret.body.jottings);
                resolve();
            });
        });
    },

    [types.BLOGHOME_ADD_JOTTINGS]: function({ commit }, jotting) {
        return new Promise((resolve, reject) => {
           api.addJotting(jotting, (ret) => {
                if (ret.ret != 0) {
                    reject();
                    return;
                }
                
                jotting.id = ret.body.id;
                commit(types.BLOGHOME_ADD_JOTTINGS, jotting);
                resolve();
            })
        });
    },

    [types.BLOGHOME_DELETE_JOTTINGS]: function({ commit }, { id }) {
        return new Promise((resolve, reject) => {
            api.deleteJotting(id, (ret) => {
                if (ret.ret != 0) {
                    reject();
                    return;
                }

                commit(types.BLOGHOME_DELETE_JOTTINGS, id);
                resolve();
            }, 1000)
        });
    }
}