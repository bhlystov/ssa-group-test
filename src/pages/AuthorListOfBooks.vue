<template>
    <div>
        <h1>Мы перешли на страницу с доступными книгами автора</h1>
    </div>
</template>
<script>
    import apiClient from "./api/client";
    export default {
        name: 'AuthorListOfBooks',
        components: {},
        props: {
            authorId: {
                type: Number,
            },
        },
        mounted() {
            console.log(this.authorId);
        }
    }
</script>
<style lang="scss">

</style>