<template>
    <div id="Plane">
        <div :class="`category-wrapper ${this.showDetail && ' active'}`"
             v-on:mouseover="toogleShowDetail"
             v-on:mouseout="toogleShowDetail">

            <div :class="`text-inline ${!this.showDetail && ' active'}`">{{this.plane.text}}</div>

            <div class="show-when-active-wrapper" v-show="this.showDetail">
                <div>{{this.plane.category}}</div>
                <div>{{this.plane.author}}</div>
                <div>{{this.plane.dateCreated}}</div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Plane",
        data() {
            return {
                showDetail: false,
            }
        },
        props: ["plane"], //this.plane
        mounted() {
            console.log("plane in plane ", this.plane)
        },
        methods: {
            toogleShowDetail() {
                this.showDetail = !this.showDetail
                console.log(this.showDetail)
            }
        }
    }
</script>

<style scoped>
    .text-inline {
        /*width:70px;*/
    }

    .text-inline.active {
        padding:0 5px;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }

    #Plane {
        color: white;
        width: 80%;
        margin-top: 2rem;
        border: 1px solid red;
    }

    .category-wrapper {
        padding: 2rem;
    }

    .category-wrapper.active {
        border: 1px solid blue;
    }

</style>