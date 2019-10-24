<template>

    <div id="Post">
        <div class="category-select-tool"
             v-show="categorySelectVisible"
             v-on:mouseover="toggleCategorySelectVisible()"
             v-on:mouseout="toggleCategorySelectVisible()">
            <el-tooltip v-for="item in catIconList"
                        transition="el-fade-in-linear"
                        class="item" effect="dark"
                        :content="item.info" placement="top-start">
                <i :class="`${item.icon} ${checkActiveCategory(item.category) && 'active'}`"
                   v-on:click="submitToggleCategory(item.category, post.id)"
                />
            </el-tooltip>

            <!--            <i v-for="item in catIconList"-->
            <!--               :class="`${item.icon} ${checkActiveCategory(item.category) && 'active'}`"-->
            <!--               v-on:click="submitToggleCategory(item.category)"-->
            <!--               v-on:mouseover.self="categoryIconMouseOver('what')"></i>-->

        </div>
        <div class="main-wrapper">
            <div class="category-wrapper"
                 v-on:mouseover.self="toggleCategorySelectVisible()"
                 v-on:mouseout.self="toggleCategorySelectVisible()">
                <i v-for="item in catIconList"
                   :class="`${checkActiveCategory(item.category) && item.icon + ' active'}`"
                   v-on:click="submitToggleCategory(item.category)"></i>
            </div>
            <div class="text-wrapper" v-on:click.self="toggleEditSelect()">
<!--                <div class="text-info"> 2019년 10월 01일</div>-->
                <div class="normal-text"
                     v-show="!editSelect"
                     v-on:click="toggleEditSelect()"
                     v-model="postText">
                    {{postText}}
                </div>
                <div v-show="editSelect" class="edit-text">
                    <el-input
                            id="edit-input"
                            type="textarea"
                            :autosize="{ minRows: 1, maxRows: 10}"
                            v-model="postText"
                            autosize
                            v-on:keyup.enter="submitEdit()"
                            clearable>
                        {{postText}}
                    </el-input>
                    <el-button id="edit-submit-btn" type="primary"
                               icon="el-icon-edit" size="mini"
                               v-on:click="submitEdit()">
                    </el-button>
                </div>
            </div>
            <div class="edit-wrapper"
                 v-on:mouseover="toggleToolVisible()"
                 v-on:mouseout="toggleToolVisible()"
            ></div>
            <div class="util-tool"
                 v-show="toolVisible"
                 v-on:mouseover="toggleToolVisible()"
                 v-on:mouseout="toggleToolVisible()">
                <div class="tooltip-wrapper">
                    <el-tooltip class="item" effect="dark"
                                transition="el-fade-in-linear"
                                content="메모 지우기" placement="right">
                        <i class="el-icon-delete" v-on:click="deletePost"></i>
                    </el-tooltip>
                </div>
                <div class="tooltip-wrapper">
                    <el-tooltip class="item" effect="dark"
                                transition="el-fade-in-linear"
                                content="종이비행기 보내기" placement="right">
                        <i class="el-icon-s-promotion" v-on:click="sendPost"></i>
                    </el-tooltip>
                </div>

            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Post",
        data() {
            return {
                categorySelectVisible: false,
                toolVisible: false,
                editSelect: false,
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
                postText: '',
                postId: 0,
                category: [],

                isActive: true,
            }
        },
        props: ["post"], // this.post

        mounted() {
            console.log("mounted");
            // console.log(this.postText);
            this.postText = this.post.text;
            this.postId = this.post.id;
            this.category = this.post.category;
            this.checkActiveCategory();
        },

        methods: {
            updatePost() {
                this.$store.dispatch("updatePost", {
                    ...this.post,
                    "text": this.postText,
                    "category": this.category,
                });
            },
            toggleCategorySelectVisible() {
                this.categorySelectVisible = !(this.categorySelectVisible)
            },
            toggleToolVisible() {
                this.toolVisible = !(this.toolVisible)
                // console.log(this.toolVisible)
            },
            toggleEditSelect() {
                this.editSelect = !(this.editSelect)
            },
            submitEdit() {
                if (this.postText == '' || null) {
                    this.$notify.error({
                        title: '빈칸이에요:(',
                        message: '메모를 입력해주세요.',
                        showClose: false,
                        offset: 100,
                        duration: 3000,
                    });
                    return;
                }
                this.editSelect = !(this.editSelect)
                this.updatePost()
            },
            submitToggleCategory(cat, id) {
                if (this.category.indexOf(cat) > -1) {
                    this.category = this.category.filter(item => item !== cat)
                } else {
                    this.category.push(cat)
                }
                this.updatePost(id);
            },
            checkActiveCategory(cat) {
                if (this.category.indexOf(cat) > -1) {
                    return true;
                }
            },
            async deletePost() {
                await this.$store.dispatch("deletePost", this.postId);
                this.$notify.warning({
                    title: '메모삭제',
                    message: '메모가 성공적으로 지워졌습니다',
                    showClose: false,
                    offset: 100,
                    duration: 3000,
                });
            },
            sendPost() {
                this.$notify.success({
                    title: '종이비행기 전송',
                    message: '종이비행기가 전송되었습니다.',
                    showClose: false,
                    offset: 100,
                    duration: 3000,
                });
            },
            categoryIconMouseOver(msg) {
                // this.$message('This is a message.');
            },
        }
    }
</script>

<style scoped>


    #Post {
        margin: auto;
        margin-bottom: 2rem;
        width: 80%;
        background-color: rgb(239, 239, 239);
        border-radius: 0.4rem;
        box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.3);
    }

    .util-tool {
        position: relative;
        background-color: rgb(224, 224, 224);
        border-radius: 0 0.4rem 0.4rem 0;
        top: 0;
        left: 0;
        padding-right: 0.5rem;
        margin-right: -2.3rem;
        /*margin-left: -10rem;*/
    }

    .util-tool .tooltip-wrapper {
        display: flex;
        flex-direction: column;
        width: 2.5rem;
        height: 2.5rem;
    }

    .util-tool .tooltip-wrapper i {
        margin: 0 auto;
        color: grey;
        font-size: 0.8rem;
    }

    .util-tool .tooltip-wrapper i:first-child {
        margin-top: 1.2rem;
    }

    .category-select-tool {
        /*min-height: 1.5rem;*/
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        vertical-align: middle;

        border-radius: 0.4rem 0.4rem 0 0;
        background-color: rgb(224, 224, 224);
    }

    .category-select-tool i {
        margin: 0.5rem 0.2rem 0.2rem 0.2rem;
        color: rgb(190, 190, 190);
        font-size: 1.3rem;
        width: 1.5rem;
        height: 1.5rem;
    }

    .category-select-tool i.active {
        color: rgb(41, 128, 185);
    }

    .category-select-tool i:first-child {
        margin-left: 0.7rem;
    }

    .main-wrapper {
        min-height: 2rem;
        /*border: 1px solid yellow;*/

        display: flex;
        justify-content: space-between;
    }

    .main-wrapper div {
        min-width: 1rem;
        /*min-height: 3rem;*/
        /*border: 1px solid yellow;*/
    }

    .main-wrapper .text-wrapper {
        /*text-align: left;*/
        font-size: 12px;
        font-family: 'Noto Serif KR', serif;
        display: table;
        width: 100%;
        min-height: 2rem;
        padding: 15px;
        margin: 0 auto;
        margin-bottom: 0.5rem;
    }

    .main-wrapper .text-wrapper .text-info {
        display: table-caption;
        text-align: right;
        vertical-align: middle;
        opacity: 0.3;
        font-size: 5px;
        margin-top: 0.5rem;
        margin-bottom: -1rem;
    }

    .main-wrapper .text-wrapper .normal-text {
        display: table-cell;
        vertical-align: middle;
    }

    .main-wrapper .text-wrapper .edit-text {
        /*display: table-cell;*/
        display: flex;
        vertical-align: middle;
    }

    #edit-input {
        flex-grow: 8;
    }

    #edit-submit-btn {
        flex-grow: 1;
    }

    .main-wrapper .category-wrapper {
        float: left;
        width: 3rem;
        display: flex;
        justify-content: center;
        flex-flow: column wrap;
    }

    .main-wrapper .category-wrapper i:last-child {
        margin-bottom: 0.3rem;
    }

    .main-wrapper .category-wrapper i.active {
        color: rgb(41, 128, 185);
        margin-top: 0.4rem;
        font-size: 0.8rem;
    }


    .main-wrapper .edit-wrapper {
        float: right;
    }


</style>