<template>
    <div class="main-textbox-wrapper">
        <div class="el-button-wrapper">
            <el-button type="primary" icon="el-icon-edit"
                       v-on:click="addItem()"
            ></el-button>
        </div>
        <div class="el-input-wrapper ">
            <el-input class="text-input"
                      placeholder="당신의 생각을 적어주세요."
                      v-on:keyup.enter.native="addItem()"
                      v-model="inputText"
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
                inputText: '',
                currentId: 6,
            }
        },

        computed: {
            nums() {
                return this.$store.state.postsVuex.nums;
            }
         },

        mounted(){
            this.$store.dispatch("loadItems");
        },

        methods: {
            async addItem() {
                if (this.inputText == '' || null) {
                    this.$notify.error({
                        title: '빈칸이에요:(',
                        message: '메모를 입력해주세요.',
                        showClose: false,
                        offset: 100,
                        duration: 3000,
                    });
                    return
                }
                await this.$store.dispatch("addItem",
                    {
                        "id": ++this.currentId,
                        "author": "",
                        "category": [],
                        "dateCreated": "",
                        "dateModified": [],
                        "text":  this.inputText
                    }
                );
                console.log(this.inputText + this.currentId);
                this.currentId++;
                this.inputText = '';
                this.$notify.success({
                    title: '메모등록',
                    message: '메모가 성공적으로 등록되었습니다.',
                    showClose: false,
                    offset: 100,
                    duration: 3000,
                });
            }
        }
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