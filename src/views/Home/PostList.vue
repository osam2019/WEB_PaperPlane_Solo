<template>
    <div id="PostList">
        <Post v-for="post in posts" :post="post">
        </Post>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Post from './Post'

    export default {
        name: "PostList",

        computed: {
            posts() {
                return this.$store.state.postsVuex.posts;
            }
        },

        mounted() {
            this.$store.dispatch("loadItems");
        },

        methods: {

        },

        components: {
            Post,
        }
    }
</script>

<style scoped>
    #PostList {
        /*border: 10px solid yellow;*/
        margin-top: 120px;
        width: 100%;
        height: 100%;
    }


</style>
