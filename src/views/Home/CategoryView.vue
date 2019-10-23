<template>
    <div>
        <div class="category-row"><i class="el-icon-question"
            v-model="cat_random"
        /> {{cat_random}}} </div>
        <div class="category-row"><i class="el-icon-s-promotion"/> </div>
        <div class="category-row"><i class="el-icon-s-management"/> </div>
        <div class="category-row"><i class="el-icon-s-opportunity"/> </div>
        <div class="category-row"><i class="el-icon-s-order"/> </div>
    </div>

</template>

<script>
    export default {
        name: 'CategoryView',
        computed: {
            cat_random() {
                return this.$store.getters.getList;
            }
        },
        mounted(){
            this.$store.dispatch("loadCategories");
        },
        methods: {

        }
    }
</script>

<style scoped>
    .category-row {
        margin-top: 2rem;
    }

    .category-row i {
        color: white;
        font-size: 3rem;
    }

</style>