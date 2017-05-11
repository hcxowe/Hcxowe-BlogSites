import * as types from './types'

export default {
    [types.BLOGHOME_GET_JOTTINGS]: function(state, jottings) {
        state.jottings = jottings;
    },

    [types.BLOGHOME_ADD_JOTTINGS]: function(state, jotting) {
        state.jottings.push(jotting);
    },

    [types.BLOGHOME_DELETE_JOTTINGS]: function(state, id) {

        let index = 0;
        state.jottings.forEach(function(jotting, i) {
            if (jotting.id === id) {
                index = i;
                return false;
            }
        }, this);
        
        state.jottings.splice(index, 1);
    }
}