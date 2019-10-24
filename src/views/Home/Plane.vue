<template>
    <div id="Plane">
        <div class="plane-inner">
            <div :class="`category-wrapper ${(this.showDetail || this.showExtended) && ' active'}`"
                 v-on:click="toogleShowExtended"
                 v-on:mouseover="toogleShowDetail"
                 v-on:mouseout="toogleShowDetail">
                <div class="left-area">
                    <i class="el-icon-s-promotion"></i>
                </div>
                <div class="right-area">
                    <div :class="`text-inline ${!(this.showDetail || this.showExtended) && ' active'}`">
                        {{this.plane.text}}
                    </div>
                    <div class="show-when-active-wrapper" v-show="(this.showDetail || this.showExtended)">
                        <i v-for="item in catIconList"
                           :class="`${checkActiveCategory(item.category) && item.icon + ' active'}`"></i>
                        <div class="plane-author-wrapper">보낸사람: {{this.plane.author}}</div>
                    </div>
                </div>
            </div>
            <div class="extended-wrapper" v-show="showExtended">
                <div class="main-area">
                    <div class="msg1">
                        <el-alert
                                title="두번 할까요 재밌어요"
                                effect="dark"
                                type="success"
                                description="">
                        </el-alert>
                    </div>

                    <div class="msg2">
                        <el-alert
                                title="그거 이미 봤어요ㅠ"
                                effect="dark"
                                type="info"
                                description="">
                        </el-alert>
                    </div>

                </div>
                <div class="footer-area">
                    <el-input placeholder="Please input" class="input-with-select" size="small">
                        <el-button slot="prepend" icon="el-icon-chat-dot-round"></el-button>
                    </el-input>
                </div>
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
                showExtended: false,
                catIconList: [
                    {
                        icon: "el-icon-question",
                        category: 'cat_random',
                        isActive: false,
                        info: "떠오른 잡생각",
                    },
                    {
                        icon: "el-icon-s-promotion",
                        category: 'cat_plane',
                        isActive: false,
                        info: "나누고 싶은 종이비행기",
                    },
                    {
                        icon: "el-icon-s-management",
                        category: 'cat_info',
                        isActive: false,
                        info: "잊어버리면 안되는 메모 / 정보",
                    },
                    {
                        icon: "el-icon-s-opportunity",
                        category: 'cat_idea',
                        isActive: false,
                        info: "번뜩이는 아이디어",
                    },
                    {
                        icon: "el-icon-s-order",
                        category: 'cat_todo',
                        isActive: false,
                        info: "해야 할 일들",
                    }
                ],
            }
        },
        props: ["plane"], //this.plane
        mounted() {
            console.log("plane in plane ", this.plane)
        },
        methods: {
            toogleShowDetail() {
                this.showDetail = !this.showDetail
                // console.log(this.showDetail)
            },
            toogleShowExtended() {
                this.showExtended = !this.showExtended
                // console.log(this.showDetail)
            },
            checkActiveCategory(cat) {
                if (this.plane.category.indexOf(cat) > -1) {
                    return true;
                }
            }
        }
    }
</script>

<style scoped>

    #Plane .extended-wrapper {
        /*height: 10vh;*/
        background-color: rgb(239, 239, 239);
        padding: 0.5rem;
        border-radius: 0.5rem;
        /*border: 1px solid blue;*/
        display: flex;
        flex-direction: column;
    }

    #Plane .extended-wrapper .main-area {
        flex: 1;
        padding: 0.5rem;
    }

    #Plane .extended-wrapper .main-area .msg1 {
        padding-left: 1rem;
    }

    #Plane .extended-wrapper .main-area .msg2 {
        padding-right: 1rem;
        margin-top: 0.75rem;
    }

    #Plane .extended-wrapper .footer-area {
        /*flex: 1rem;*/
    }

    .category-wrapper .right-area .text-inline {
        width: 100%;
        text-align: left;
        font-size: 12px;
        font-family: 'Noto Serif KR', serif;
        line-height: 1.2rem;
    }

    .category-wrapper .right-area .text-inline.active {
        /*min-width: 0;*/
        width: 15vw;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    #Plane {
        margin: auto;
        margin-top: 2rem;
        width: 80%;
        background-color: rgb(224, 224, 224);
        border-radius: 0.4rem;
        box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.3);

        display: flex;
        flex-direction: column;
    }

    .category-wrapper {
        padding: 0.5rem;
        border-radius: 0.5rem;
        /*border: 1px solid blue;*/
        display: flex;
    }

    .category-wrapper .left-area {
        /*border: 1px solid yellow;*/
        width: 1rem;
        margin-right: 0.5rem;
    }

    .category-wrapper .left-area i {
        color: rgb(41, 128, 185)
    }

    .category-wrapper .right-area {
        /*border: 1px solid yellow;*/
        flex: 1;
    }

    .show-when-active-wrapper {
        margin-top: 0.5rem;
        display: flex;
    }

    .show-when-active-wrapper i {
        color: rgb(190, 190, 190);
        margin: 0.2rem;
    }

    .show-when-active-wrapper .plane-author-wrapper {
        font-weight: 200;
        text-align: right;
        color: rgb(190, 190, 190);
        font-size: 6px;
        flex: 1;
    }
</style>