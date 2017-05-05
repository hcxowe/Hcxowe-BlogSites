export default {
    getUserInfo (state, { msg }) {
        state.userInfo = msg;
    },

    getUserDetail (state, { msg }) {
        state.userDetail = msg;
    }
}

