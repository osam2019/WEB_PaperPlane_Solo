<template>
    <div id="RightView">
        <div class="nav-wrapper">
            <el-badge value="new" class="item">
                <i :class="`el-icon-s-promotion ${planesViewVisible && 'active'}`"
                   v-on:click="togglePlanesViewVisible"></i>
            </el-badge>
        </div>
        <div class="content-wrapper" v-show="planesViewVisible">
            <PlanesView></PlanesView>
        </div>
    </div>
</template>

<script>
    import PlanesView from "./PlanesView";

    export default {
        data() {
            return {
                planesViewVisible: false,
            }
        },
        methods: {
            togglePlanesViewVisible() {
                this.planesViewVisible = !this.planesViewVisible
            }
        },
        components: {
            PlanesView
        },
    }
</script>

<style scoped>

    #RightView {
        /*border: 1px solid green;*/
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
        /*border: 1px solid darkmagenta;*/
        position: absolute;
        height: 120px;
        width: 100%;
        /*opacity: 0.3;*/
        opacity: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .nav-wrapper i {
        text-align: center;
        color: white;
        font-size: 3rem;
        opacity: 0.3;
    }

    .nav-wrapper i.active {
        opacity: 1;
    }

    .content-wrapper {
        /*border: 4px solid saddlebrown;*/
        height: 100%;
        padding-top: 120px;

        background-color: rgba(1, 1, 1, 0.2);
        display: flex;
        justify-content: center;
    }

</style>