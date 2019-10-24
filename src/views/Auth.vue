<template>
    <div id="Auth">

        <MainHeader></MainHeader>

        <div class="grid">
            <div class="grid-child"></div>
            <AuthTemplate class="grid-child"></AuthTemplate>
            <div class="grid-child"></div>
        </div>
    </div>
</template>

<script>
    import MainHeader from "../components/MainHeader";
    import AuthTemplate from "./Auth/AuthTemplate";

    export default {
        name: 'Auth',
        components: {
            MainHeader,
            AuthTemplate,
        }
    }
</script>

<style scoped>

    .grid {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    }

    .grid .grid-child {
        min-height: 80vh;
        /*border: 0.1px solid red;*/
        margin-top: 100px;
        width: 100%;
        height: 80vh;
    }
</style>