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
            selectedCategory(){
                return this.$store.state.postsVuex.selectedCategory;
            },
            posts() {
                // console.log("STEP 0 ", this.selectedCategory);
                if(this.selectedCategory=="all") {
                    // console.log("@@@@@1@@@@", this.$store.getters.getPosts);
                    return this.$store.getters.getPosts;
                }

                else if(this.selectedCategory=="cat_random") {
                    // console.log("STEP 1");
                    return this.$store.getters.getRandomPosts;
                }

                else if(this.selectedCategory=="cat_plane") {
                    // console.log("STEP 1");
                    return this.$store.getters.getPlanePosts;
                }

                else if(this.selectedCategory=="cat_info") {
                    // console.log("STEP 1");
                    return this.$store.getters.getInfoPosts;
                }

                else if(this.selectedCategory=="cat_idea") {
                    // console.log("STEP 1");
                    return this.$store.getters.getIdeaPosts;
                }

                else if(this.selectedCategory=="cat_todo") {
                    // console.log("STEP 1");
                    return this.$store.getters.getTodoPosts;
                } else {
                    return this.$store.getters.getPosts;
                }

            }
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

</style>
