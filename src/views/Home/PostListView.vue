<template>
    <div id="PostListView">
            <MainTextWriter></MainTextWriter>
            <PostList></PostList>
    </div>
</template>

<script>
    import PostList from './PostList'
    import MainTextWriter from "./MainTextWriter"

    export default {
        components: {
            MainTextWriter,
            PostList,
        },
    }
</script>

<style scoped>

    #PostListView {

    }


</style>