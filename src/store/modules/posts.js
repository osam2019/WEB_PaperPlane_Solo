import Vuex from "vuex";
import axios from 'axios';

export default {
    state: {
        nums: 0,
        items: [],
        selectedCategory: "all"
    },
    mutations: {
        updateList(state, items) {
            state.items = items;
        },
        updateId(state, nums) {
            state.nums = nums;
        },
        addItem(state, item) {
            state.nums++;
            state.items.push(item);
        },
        deletePost(state, id) {
            // state.nums--;
            state.items = state.items.filter((post) => (parseInt(post.id) !== id))
        },
        updatePost(state, editedPost) {
            // console.log("editedPost@@@@@@@@@@@@", editedPost);
            let postInStore = state.items.find((item) => item.id == editedPost.id)
            let postInStoreIndex = state.items.indexOf(postInStore)
            console.log(postInStoreIndex, postInStore)
            let start = state.items.slice(0, postInStoreIndex);
            // console.log('start@!@!@@', start.length)
            let end = [];
            if (postInStoreIndex < state.items.length) {
                end = state.items.slice(postInStoreIndex + 1, state.items.length);
                // console.log('endt@!@!@@', end.length)
            }
            state.items = start.concat(editedPost).concat(end);

        },
        selectedCategory(state, categoryName) {
            state.selectedCategory = categoryName;
        }

    },
    getters: {
        getPosts(state) {
            return state.items.sort((a, b) => a.id < b.id);
        },
        getRandomPosts(state) {
            return state.items.filter((item) => {
                return item.category.find((cate) => {
                    return cate == "cat_random";
                })
            })
        },
        getPlanePosts(state) {
            return state.items.filter((item) => {
                return item.category.find((cate) => {
                    return cate == "cat_plane";
                })
            })
        },
        getInfoPosts(state) {
            return state.items.filter((item) => {
                return item.category.find((cate) => {
                    return cate == "cat_info";
                })
            })
        },
        getIdeaPosts(state) {
            return state.items.filter((item) => {
                return item.category.find((cate) => {
                    return cate == "cat_idea";
                })
            })
        },
        getTodoPosts(state) {
            return state.items.filter((item) => {
                return item.category.find((cate) => {
                    return cate == "cat_todo";
                })
            })
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
            commit("addItem", data);
        },
        deletePost({commit}, id) {
            commit("deletePost", id)
        },
        updatePost({commit}, editedPost) {
            console.log(editedPost)
            commit("updatePost", editedPost)
        },
        selectedCategory({commit}, categoryName) {
            commit("selectedCategory", categoryName)
        }
    }
}