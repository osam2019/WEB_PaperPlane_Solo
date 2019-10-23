<template>
    <div id="RightView">
        <div class="nav-wrapper">
            <i class="el-icon-edit"></i>
        </div>
        <div class="content-wrapper"></div>
    </div>
</template>

<script>
    export default {
        components: {
        },
    }
</script>

<style scoped>

    #RightView {
        border: 1px solid green;
        position: fixed; /* Set the navbar to fixed position */
        margin-top: 100px;
        top: 0;
        right: 0;
        height: 100%;
        width: 25%;

        display: flex;
        flex-direction: column;
    }

    .nav-wrapper {
        border: 1px solid darkmagenta;
        height: 120px;

        margin: 0 auto;
    }

    .nav-wrapper i {
        font-size: 5rem;
    }

    .content-wrapper {
        border: 4px solid saddlebrown;
        height: 100%;
    }

</style>