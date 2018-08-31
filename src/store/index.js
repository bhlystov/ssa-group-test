import apiClient from '../api/client.js'

const state = {
    listWhatWeDo: [],
    footerInputValue: '',
};

const actions = {
    async fetchDataList ({ commit }) {
        try {
            commit('setListContent', await apiClient.getDataList());
        } catch (err) {
            throw err;
        }
    }
};

const mutations = {
    setListContent (state, listWhatWeDo) {
        state.listWhatWeDo = listWhatWeDo;
    },
    setFooterInputValue(state, footerInputValue) {
        state.footerInputValue = footerInputValue;
    }
};


export default {
    namespaced: true,
    state,
    actions,
    mutations,
}