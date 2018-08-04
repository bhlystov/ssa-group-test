<template>
    <div>
        <!--<router-view />-->
        <books-list />
    </div>
</template>

<script>
    import BooksList from "./pages/BooksList.vue";
    export default {
        name: 'App',
        components: {
            BooksList
        },
    }
</script>
