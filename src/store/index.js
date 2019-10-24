import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import posts from './modules/posts.js'
import categories from "./modules/categories";
import planes from "./modules/planes"

export default new Vuex.Store({
    modules: {
        postsVuex: posts,
        categoriesVuex: categories,
        planesVuex: planes,
    }
})
