<template>

    <div id="Post">
        <div class="category-select-tool"
             v-show="categorySelectVisible"
             v-on:mouseover="toggleCategorySelectVisible()"
             v-on:mouseout="toggleCategorySelectVisible()">
            <i v-for="item in catIconList"
               :class="`${item.icon} ${checkActiveCategory(item.category) && 'active'}`"
               v-on:click="submitToggleCategory(item.category)"></i>

        </div>
        <div class="main-wrapper">
            <div class="category-wrapper"
                 v-on:mouseover="toggleCategorySelectVisible()"
                 v-on:mouseout="toggleCategorySelectVisible()">
                <i v-for="item in catIconList"
                   :class="`${checkActiveCategory(item.category) && item.icon + ' active'}`"
                   v-on:click="submitToggleCategory(item.category)"></i>
            </div>
            <div class="text-wrapper" v-on:click.self="toggleEditSelect()">
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
                <i class="el-icon-delete"
                   v-on:click="deletePost"></i>
                <i class="el-icon-s-promotion"></i>
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
                    },
                    {
                        icon: "el-icon-s-promotion",
                        category: 'cat_plane',
                        isActive: false,
                    },
                    {
                        icon: "el-icon-s-management",
                        category: 'cat_info',
                        isActive: false,
                    },
                    {
                        icon: "el-icon-s-opportunity",
                        category: 'cat_idea',
                        isActive: false,
                    },
                    {
                        icon: "el-icon-s-order",
                        category: 'cat_todo',
                        isActive: false,
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
            async updatePost() {
                await this.$store.dispatch("updatePost", {
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
                this.editSelect = !(this.editSelect)
                this.updatePost()
            },
            submitToggleCategory(cat) {
                if (this.category.indexOf(cat) > -1) {
                    this.category = this.category.filter(item => item !== cat)
                } else {
                    this.category.push(cat)
                }
                this.updatePost()
            },
            checkActiveCategory(cat) {
                if (this.category.indexOf(cat) > -1) {
                    return true;
                }
            },
            async deletePost() {
                await this.$store.dispatch("deletePost", this.postId);
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
        margin-right: -2.2rem;
    }

    .util-tool i {
        margin: 0.3rem;
        color: rgb(190, 190, 190);
        font-size: 0.8rem;
    }

    .util-tool i:first-child {
        margin-top: 0.6rem;
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
        font-size: 1rem;
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
        text-align: left;
        display: table;
        width: 100%;
        min-height: 2rem;
        padding: 15px;
        margin: 0 auto;
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
        width: 2rem;
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
        font-size: 0.3rem;
    }


    .main-wrapper .edit-wrapper {
        float: right;
    }


</style>