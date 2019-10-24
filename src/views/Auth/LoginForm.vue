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
            <el-input placeholder="비밀번호" v-model="pwd" type="password">
                <el-button slot="prepend" icon="el-icon-key"></el-button>
            </el-input>
            <div style="height: 1rem; margin-top: 0.7rem; paddinig:0.2rem; margin-bottom: 0.7rem">
                <span style="float: left">아직 회원이 아니십니까?</span>
                <span style="float: right; color: rgb(41, 128, 185); font-weight: bold;">회원가입</span>
            </div>
            <div style="height: 0.7rem"></div>
            <div class="btn-wrapper">
<!--                <el-button size="medium" type="primary">Primary</el-button>-->
                <router-link to="/">
                    <div class="btn" v-on:click="clickLoginBtn">로그인</div>
                </router-link>
            </div>
            <div class="auto-login" style="height: 1rem; margin-top: 0.7rem; paddinig:0.2rem; margin-bottom: 0.7rem">
                <span style="float: left; color: rgb(41, 128, 185); font-weight: bold;" >
                    <i style="font-size: 1.3rem;" class="el-icon-success"/> 자동로그인</span>
                <span style="float: right; ">비밀 번호를 잊으셨습니까?</span>
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: '',
                pwd: '',
            }
        },
        methods: {
            clickLoginBtn() {
                this.id = ""
                this.pwd = ""
            }
        }
    }
</script>

<style scoped>
    .input-wrapper .auto-login {
        height: 2rem;
        line-height: 2rem;
    }

    .input-wrapper .btn-wrapper {
        width: 100%;
    }

    .input-wrapper .btn-wrapper .btn{
        height: 3rem;
        line-height: 3rem;

        font-family: 'Nanum Gothic Coding', monospace;
        font-weight: bold;
        text-align: center;
        vertical-align: center;
        color: white;
        border-radius: 0.25rem;
        height: 3rem;
        background-color: #1f1f1f;
    }

    .input-wrapper .btn-wrapper .btn:hover {
        opacity: 0.8;
    }

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
        min-width: 350px;
        width: 20vw;
        height: 45%;
        background-color: white;
        border-radius: 0.25rem;
        margin: auto;
    }


</style>