import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import posts from './modules/posts.js'

export default new Vuex.Store({
    modules: {
        postsVuex: posts,
    }
})
