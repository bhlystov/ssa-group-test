import apiClient from '../api/client.js'

const state = {
    listContentText: [],
};

const actions = {
    async fetchContentText ({ commit }) {
        try {
            commit('setListContentText', await apiClient.getListContentText());
        } catch (err) {
            throw err;
        }
    }
};

const mutations = {
    setListContentText (state, listContentText) {
        state.listContentText = listContentText;
    },
};


export default {
    namespaced: true,
    state,
    actions,
    mutations,
}