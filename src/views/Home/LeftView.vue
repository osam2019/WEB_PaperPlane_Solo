<template>
    <div id="LeftView">
        <div class="nav-wrapper" v-on:click.self="makeAllInvisible">
            <i :class="`el-icon-date ${calendarVisible && 'active'}`"
               v-on:click="toggleCalendar"></i>
            <i :class="`el-icon-edit ${categoryVisible && 'active'}`"
               v-on:click="toggleCategory"></i>
        </div>
        <div class="content-wrapper" v-show="wrapperVisible">
            <CalendarView v-show="calendarVisible"></CalendarView>
            <CategoryView v-show="categoryVisible"></CategoryView>
        </div>
    </div>
</template>

<script>
    import CalendarView from './Calendar'
    import CategoryView from "./CategoryView";

    export default {
        data() {
            return {
                wrapperVisible: true,
                calendarVisible: true,
                categoryVisible: false,
            }
        },
        methods: {
            makeAllInvisible() {
                this.wrapperVisible = false;
                this.calendarVisible = false;
                this.categoryVisible = false;
            },
            toggleCalendar() {
                if (this.calendarVisible) {
                    this.wrapperVisible = false;
                    this.calendarVisible = false;
                    this.categoryVisible = false;
                }
                else {
                    this.wrapperVisible = true;
                    this.calendarVisible = true;
                    this.categoryVisible = false;
                }
            },
            toggleCategory() {
                if (this.categoryVisible) {
                    this.wrapperVisible = false;
                    this.categoryVisible = false;
                    this.calendarVisible = false;
                }
                else {
                    this.wrapperVisible = true;
                    this.categoryVisible = true;
                    this.calendarVisible = false;
                }
            }
        },
        components: {
            CalendarView,
            CategoryView,
        },
    }
</script>

<style scoped>

    #LeftView {
        /*border: 1px solid green;*/
        position: fixed; /* Set the navbar to fixed position */
        margin-top: 100px;
        top: 0;
        left: 0;
        height: 100%;
        width: 25%;

        display: flex;
        flex-direction: column;
    }

    .nav-wrapper {
        /*border: 1px solid darkmagenta;*/
        position: absolute;
        height: 120px;
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .nav-wrapper i {
        text-align: center;
        color: white;
        font-size: 3rem;
        opacity: 0.3;
    }

    .nav-wrapper i.active {
        opacity: 1;
    }

    .nav-wrapper i:first-child {
        margin-right: 2rem;
    }

    .content-wrapper {
        /*border: 4px solid saddlebrown;*/
        height: 100%;
        padding-top: 120px;

        /*background-color: rgba(1, 1, 1, 0.2);*/
        display: flex;
        justify-content: center;
    }

</style>