import axios from 'axios';

export default {
    state: {
        selectedPlanes: 'receivedPlanes',
        unreadPlanes: [],
        receivedPlanes: [],
        sentPlanes: [],
    },
    mutations: {
        selectedPlanes(state, planesName){
            state.selectedPlanes = planesName;
        },
        updateUnreadPlanes(state, planes) {
            state.unreadPlanes = planes
        },
        updateReceivedPlanes(state, planes) {
            state.receivedPlanes = planes
        },
        UpdateSentPlanes(state, planes) {
            state.sentPlanes = planes
        },

    },
    getters: {
        getReceivedPlanes(state) {
            return state.receivedPlanes;
        },
        getSentPlanes(state) {
            return state.sentPlanes;
        },
    },
    actions: {
        async loadPlanes({commit}) {
            console.log("loadPlanes")
            let result = await axios.get("./mockup/planes.json")
            commit("updateUnreadPlanes", result.data.unreadPlanes)
            commit("updateReceivedPlanes", result.data.receivedPlanes)
            commit("UpdateSentPlanes", result.data.sentPlanes)
        },
        selectedPlanes({commit}, planesName) {
            commit("selectedPlanes", planesName)
        }
    }
}