<template>
    <div id="AuthTemplate">
        <LoginForm></LoginForm>
    </div>
</template>

<script>
    import LoginForm from "./LoginForm";

    export default {

        components: {
            LoginForm,
        }
    }
</script>

<style scoped>
    #AuthTemplate {
        /*display: flex;*/
        /*align-items: center;*/
    }
</style>