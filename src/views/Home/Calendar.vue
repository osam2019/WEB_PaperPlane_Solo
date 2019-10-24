<template>
    <div >
<!--        <el-calendar v-model="value">-->
<!--        </el-calendar>-->
        <v-calendar :attributes='attrs'>
            <div slot="day-popover" slot-scope="" style="font-size: 1.5rem">

                <div><i class="el-icon-question">     7개</i></div>
                <div><i class="el-icon-s-promotion">     5개</i></div>
                <div><i class="el-icon-s-management">     4개</i></div>
                <div><i class="el-icon-s-opportunity">     5개</i></div>
                <div><i class="el-icon-s-order">     3개</i></div>

            </div>
        </v-calendar>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                attrs: [
                    {
                        key: 'today',
                        highlight: true,
                        popover: {
                            label: 'You just hovered over today\'s date!',
                        },
                        dates: new Date(),
                    },
                ],
            }
        },
        components: {
        },
    }
</script>

<style scoped>

</style>