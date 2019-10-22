<template>

    <div id="ToolHeader">
        <PostListView></PostListView>
    </div>
</template>

<script>
    import PostListView from "./PostListView";

    export default {
        name: 'ToolHeader',
        components: {
            PostListView,
        }
    }

</script>

<style scoped>
    #ToolHeader div {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #ToolHeader {
        margin-top: 100px;
        position:fixed;
        width: 100vw;
        height: 150px;
        /*background-color: antiquewhite;*/
    }


</style>