<template>

    <div id="MainHeader">
        <div>
            <img id="main-logo" src="../../public/img/logo_with_font_white.png"/>
            <i class="el-icon-menu" width="300px" height="300px"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MainHeader',
    }

</script>

<style scoped>
    #MainHeader div {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #MainHeader {
        position:fixed;
        width: 100vw;
        height: 100px;
        background-color: #1e1e1e;
    }

    #main-logo {
        width: auto;
        height: 100%;
    }

    #main-logo:hover {
        opacity: 0.7;
    }

    i {
        text-align: center;
        margin-right: 3rem;
        color: white;
        font-size: 3rem;
        width: 3rem;
        height: 3rem;
    }

    i:hover {
        opacity: 0.7;
    }
</style>