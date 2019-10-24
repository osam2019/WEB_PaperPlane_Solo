<template>
    <div id="PlanesView">
        <el-menu
                :default-active="'receivedPlanes'"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="transparent"
                text-color="#fff"
                active-text-color="rgb(41, 128, 185)">
            <el-menu-item index="receivedPlanes">받은 비행기</el-menu-item>
            <el-menu-item index="sentPlanes">보낸 비행기</el-menu-item>
        </el-menu>
        <div class="planes-wrapper">
            <Plane v-for="plane in planes" :plane="plane" :key="plane.id">
            </Plane>
        </div>
    </div>
</template>

<script>
    import Plane from "./Plane";

    export default {
        data() {
            return {
                whichPlanes: 'receivedPlanes',
                isReceivedVisible: true,
            };
        },
        computed: {
            selectedPlanes() {
                return this.$store.state.planesVuex.selectedPlanes
            },
            planes() {
                if (this.selectedPlanes == 'receivedPlanes') {
                    return this.$store.getters.getReceivedPlanes
                } else if (this.selectedPlanes == 'sentPlanes') {
                    return this.$store.getters.getSentPlanes
                }
            },
        },
        methods: {
            async handleSelect(value) {
                if (value == "receivedPlanes") {
                    await this.$store.dispatch("selectedPlanes", "receivedPlanes");
                    return true
                } else if (value == "sentPlanes") {
                    await this.$store.dispatch("selectedPlanes", "sentPlanes");
                    return false
                } else {
                    console.log("ERR in PlanesView methods handleSelect")
                }
            }
        },
        mounted() {
            this.$store.dispatch("loadPlanes");
        },
        components: {
            Plane,
        }
    }
</script>

<style scoped>
    #PlanesView {
        /*border: 1px solid red;*/
        width: 100%;
    }

    .planes-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    el-tab-pan {
        color: white;
    }
</style>