<template>
    <div>
        <div class="category-nav">
            <div :class="'category-row ' + `${activateCategoryIcon('all') && 'active'}`"
                 v-on:click="showCategory('all')">
                <span><i class="el-icon-files"></i>전체보기</span></div>
            <div :class="'category-row ' + `${activateCategoryIcon('cat_random') && 'active'}`"
                 v-on:click="showCategory('cat_random')">
                <span><i class="el-icon-question"></i>정리 안된 생각</span></div>
            <div :class="'category-row ' + `${activateCategoryIcon('cat_plane') && 'active'}`"
                 v-on:click="showCategory('cat_plane')">
                <span><i class="el-icon-s-promotion"/> 종이 비행기</span></div>
            <div :class="'category-row ' + `${activateCategoryIcon('cat_info') && 'active'}`"
                 v-on:click="showCategory('cat_info')">
                <span><i class="el-icon-s-management"/> 메모/정보</span></div>
            <div :class="'category-row ' + `${activateCategoryIcon('cat_idea') && 'active'}`"
                 v-on:click="showCategory('cat_idea')">
                <span><i class="el-icon-s-opportunity"/> 아이디어</span></div>
            <div :class="'category-row ' + `${activateCategoryIcon('cat_todo') && 'active'}`"
                 v-on:click="showCategory('cat_todo')">
                <span><i class="el-icon-s-order"/> 할 일들</span>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'CategoryView',
        computed: {
            selectedCategory() {
                return this.$store.state.postsVuex.selectedCategory;
            }
        },
        mounted() {
            this.$store.dispatch("loadItems");
        },
        methods: {
            showCategory(cate) {
                console.log("STEP 3")
                this.$store.dispatch('selectedCategory', cate);
            },
            activateCategoryIcon(cat) {
                return (this.selectedCategory == cat);
            }
        }
    }
</script>

<style scoped>
    .category-nav {
        font-size: 2rem;
        color: white;
        display: table;
    }

    .category-row {
        opacity: 0.3;
        /*margin-top: 3rem;*/
        height: 5rem;
        text-align: center;
        display: table-row;
        text-align: left;

    }

    .category-row.active {
        opacity: 1;
    }

    .category-row span {
        display: flex;
        justify-content: left;
        align-items: center;
        text-align: left;
    }

    .category-row i {
        color: white;
        text-align: center;
        font-size: 3rem;
        margin-right: 1rem;
    }

</style>