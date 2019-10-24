import axios from 'axios';

export default {
    state: {
        cat_random: [],
        cat_plane: [],
        cat_info: [],
        cat_idea: [],
        cat_todo: [],
        items:[]
    },
    mutations: {
        updateCategory(state, category, id) {
            state[category].push(id)
        },
        updateItems(state,items){
            state.items=items;
        }
    },
    getters:{
        getCatRandom(state){
            return state.cat_random;
        }
    },
    /*actions: {
        async loadCategories({commit}) {
            console.log("loadCategories")
            let result = await axios.get("./mockup/posts.json");

            commit.updateItems(result.data.items);

            result.data.items.map((item) => {
                if (item.category.indexOf("cat_random")) commit("updateCategory", "cat_random", item.id);
                if (item.category.indexOf("cat_plane")) commit("updateCategory", "cat_plane", item.id);
                if (item.category.indexOf("cat_info")) commit("updateCategory", "cat_info", item.id);
                if (item.category.indexOf("cat_idea")) commit("updateCategory", "cat_idea", item.id);
                if (item.category.indexOf("cat_todo")) commit("updateCategory", "cat_todo", item.id);
            })
        }
    }*/
}