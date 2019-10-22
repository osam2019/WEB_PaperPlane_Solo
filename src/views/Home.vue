<template>
    <div class="home">
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<style scoped>
    .home {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    }

    .home div {
      height: 100%;
      border: 0.1px solid red;
    }

</style>

<script>
    // @ is an alias to /src

    export default {
        name: 'home',
        components: {}
    }
</script>
