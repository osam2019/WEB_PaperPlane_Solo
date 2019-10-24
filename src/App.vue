<template>
    <div id="app">
        <router-view/>
        <div style="margin-top: 100px"></div>
    </div>
</template>

<style>

    @import url('https://fonts.googleapis.com/css?family=Noto+Serif+KR:200,300,400,500,600,700,900&display=swap&subset=korean');
    @import url('https://fonts.googleapis.com/css?family=Nanum+Gothic+Coding:400,700&display=swap&subset=korean');

    body, html {
        padding: 0;
        margin: 0;
        width: 100%;
        min-height: 100vh;
    }

    body {
        /*background-color: whitesmoke;*/
        background-image: url('../public/img/bg-img-cloud01-black-opa.jpg');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        background-position: left bottom;
    }

    #app {
        /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
        font-family: 'Noto Serif KR', serif;
        /*font-family: 'Nanum Gothic Coding', monospace;*/
        font-size: 15px;
        line-height: 1.8em;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;

    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>

<script>
    // import MainHeader from "./components/MainHeader";


    export default {
        components: {},

    }
</script>
