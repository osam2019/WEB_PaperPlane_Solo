import Vuex from "vuex";
import axios from 'axios';

export default {
    state: {
        posts: [
            {
                "text": "hi"
            },
            {
                "text": "hi"
            },
            {
                "text": "hi"
            },
        ]
    },
    mutations: {
        updateList(state, posts){
            state.posts = posts;
        },
    },

    actions: {
        async loadItems({commit}) {
            console.log("loadItems")
            let result = await axios.get("./mockup/posts.json");
            commit("updateList", result.data.items);
            console.log("----result" + JSON.stringify(result) + result);
        },
    }
}