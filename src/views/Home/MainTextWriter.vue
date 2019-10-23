<template>
    <div class="main-textbox-wrapper">
        <div class="el-button-wrapper">
            <el-button type="primary" icon="el-icon-edit"></el-button>
        </div>
        <div class="el-input-wrapper ">
            <el-input class="text-input"
                      placeholder="당신의 생각을 적어주세요."
                      v-model="input"
                      clearable>
            </el-input>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MainTextWriter',
        data() {
            return {
                input: ''
            }
        },
    }
</script>

<style scoped>
    .main-textbox-wrapper {
        position: fixed;
        left: 50%;
        transform: translate(-50%, 0);
        width: 40vw;
        height: auto;
        /*border: 1px solid yellow;*/

        display: flex;
        justify-content: space-between;
        margin-top: 5vh;
        margin-bottom: 5vh;

    }

    .el-input-wrapper {
        float: right;
        width: 95%;
        /*width: 55vh;*/
        /*border: 1px solid red;*/
    }

    .el-button-wrapper {
        float: left;
        /*border: 1px solid pink;*/
    }
</style>