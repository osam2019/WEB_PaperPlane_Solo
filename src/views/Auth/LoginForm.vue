<template>
    <div id="LoginForm">
        <div class="logo-wrapper">
            <img class="logo" src="../../../public/img/logo_black.png"/>
            <img class="font" src="../../../public/img/font_black.png"/>
        </div>
        <div class="input-wrapper">
            <el-input placeholder="아이디" v-model="id">
                <el-button slot="prepend" icon="el-icon-user-solid"></el-button>
            </el-input>
            <div style="height: 0.7rem"></div>
            <el-input placeholder="비밀번호" v-model="pwd">
                <el-button slot="prepend" icon="el-icon-key"></el-button>
            </el-input>
            <div style="margin-top: 0.5rem paddinig:0.2
            rem">
                <span style="float: left">아직 회원이 아니십니까?</span>
                <span style="float: right">회원가입</span>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                id:'',
                pwd:'',
            }
        }
    }
</script>

<style scoped>
    .input-wrapper {
        width: 100%;
        margin-top: 2rem;
        text-align: left;
    }

    .input-wrapper el-input {
            width: 100%;
            margin-top: 1rem;
            text-align: left;
    }

    /*.input-wrapper input{*/
    /*    width: 100%;*/
    /*    height: 2rem;*/
    /*    margin-top: 0.2rem;*/
    /*    text-align: left;*/
    /*}*/

    .logo-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .logo {
        width: 100px;
        height: 100px;
    }

    .font {
        margin-top: 23px;
        width: 180px;
    }

    #LoginForm {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        /*padding-top: 3rem;*/
        padding: 3rem;

        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        min-width: 300px;
        width: 20vw;
        height: 50%;
        background-color: white;
        border-radius: 0.25rem;
        margin: auto;
    }


</style>