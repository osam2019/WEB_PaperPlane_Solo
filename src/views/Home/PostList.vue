<template>
    <div id="PostList">

            <Post v-for="post in posts" :post="post" :key="post.id">
            </Post>

    </div>
</template>

<script>
    import Post from './Post'

    export default {
        name: "PostList",
        computed: {
            posts() {
                return this.$store.state.postsVuex.items;
            },
        },

        mounted() {
            this.$store.dispatch("loadItems");
        },

        methods: {

        },

        components: {
            Post,
        },
    }
</script>

<style scoped>


    #PostList {
        /*border: 10px solid yellow;*/
        margin-top: 120px;
        width: 100%;

        display: flex;
        flex-direction: column-reverse;
    }

    #PostList{
        /*border: 2px solid yellow ;*/
    }

</style>
