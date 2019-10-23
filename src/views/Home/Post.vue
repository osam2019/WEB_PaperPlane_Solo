<template>
    <div id="Post">
        <div class="category-select-tool"
             v-show="categorySelectVisible"
            v-on:mouseover = "toggleCategorySelectVisible()"
            v-on:mouseout = "toggleCategorySelectVisible()">
        </div>
        <div class="main-wrapper">
            <div class="category-wrapper"
                 v-on:mouseover = "toggleCategorySelectVisible()"
                 v-on:mouseout = "toggleCategorySelectVisible()"
            ></div>
            <div class="text-wrapper">
                <span>{{post.text}}</span>
            </div>
            <div class="edit-wrapper"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Post",
        data(){
            return{
                categorySelectVisible: false,
            }
        },
        props:["post"],
        methods: {
            toggleCategorySelectVisible() {
                this.categorySelectVisible = !(this.categorySelectVisible)
            }
        }
    }
</script>

<style scoped>
    #Post {
        margin: auto;
        margin-bottom: 2rem;
        width: 80%;
        background-color: azure;
        border-radius: 0.5rem;
        box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.3);
    }

    .category-select-tool {
        height: 1.5rem;
        width: 100%;
        border-radius: 0.5rem 0.5rem 0 0;
        background-color: darkgray;
    }

    .main-wrapper{
        /*height: 3rem;*/
        min-height: 3rem;
        /*border: 1px solid yellow;*/

        display: flex;
        justify-content: space-between;
    }

    .main-wrapper div{
        min-width: 1rem;
        min-height: 3rem;
        /*border: 1px solid yellow;*/
    }

    .main-wrapper .text-wrapper{
        text-align:left;
        display: table;
        width: 100%;
        height: 100%;
        /*border: 1px solid blue;*/
    }

    .main-wrapper .text-wrapper span {
        padding: 12px;
        display: table-cell;
        vertical-align: middle;
    }

    .main-wrapper .category-wrapper {
        float: left;
        width: 2rem;
    }



    .main-wrapper .edit-wrapper {
        float: right;
    }



</style>