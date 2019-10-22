<template>
    <div id="app">
        <MainHeader></MainHeader>
        <router-view/>
    </div>
</template>

<style>

    body, html {
        padding: 0;
        margin: 0;
        width: 100%;
        min-height: 100vh;
    }

    body {
        background-color: whitesmoke;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
    import MainHeader from "./components/MainHeader";

    export default {
        components: {
            MainHeader,
        },

    }
</script>
