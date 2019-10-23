import Vuex from "vuex";
import axios from 'axios';

export default {
    state: {
        nums: 0,
        items: [],
    },
    mutations: {
        updateList(state, items){
            state.items = items;
        },
        updateId(state, nums) {
            state.nums = nums;
        },
        addMenuItem(state, item){
            state.nums++;
            state.items.push(item);
        },
        deletePost(state, id) {
            // console.log("__"+id)
            state.items = state.items.filter((post) => (parseInt(post.id) !== id))
        },
        updatePost({commit}, editedPost) {
            // let target = state.items.map((item) => {
            //
            // })
        }

    },

    actions: {
        async loadItems({commit}) {
            console.log("loadItems MainTextWriter")
            let result = await axios.get("./mockup/posts.json");
            commit("updateList", result.data.items);
            commit("updateId", result.data.nums);
            // console.log("----result" + JSON.stringify(result));
        },
        addItem({commit}, data) {
            commit("addMenuItem", data);
        },
        deletePost({commit}, id) {
            commit("deletePost", id)
        },
        updatePost({commit}, editedPost) {
            commit("updatePost", editedPost)
        }
    }
}