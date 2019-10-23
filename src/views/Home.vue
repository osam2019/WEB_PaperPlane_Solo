<template>
    <div id="Home">
        <MainHeader></MainHeader>
<!--        <ToolHeader></ToolHeader>-->
        <div id="header-cover"></div>
        <div class="grid">
            <div ></div>
            <PostListView></PostListView>
            <div ></div>
        </div>
    </div>
</template>

<style scoped>
    #header-cover {
        position: fixed;
        margin-top: 100px;
        height: 120px;
        width: 100vw;
        background-image: url('../../public/img/bg-img-cloud01-black-opa.jpg');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        background-position: left bottom;
        opacity: 0.95;
    }

    .grid {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    }

    .grid div {
        min-height: 100vh;
        border: 0.1px solid red;
        margin-top: 100px;
        width: 100%;
        height: 100vh;
    }

</style>

<script>
    // @ is an alias to /src
    import MainHeader from "../components/MainHeader";
    import PostListView from './Home/PostListView';
    import ToolHeader from "../components/ToolHeader";

    export default {
        name: 'home',
        components: {
            ToolHeader,
            MainHeader,
            PostListView,
        }
    }
</script>
