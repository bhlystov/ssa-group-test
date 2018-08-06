<template>
    <div>
        <h1>Мы перешли на страницу с доступными книгами автора</h1>
        <button class="btn btn-success"
                @click="goBack(-1)">
            Back
        </button>
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
        },
        methods: {
            goBack(step) {
                this.$router.go(step);
            },
        }
    }
</script>
<style lang="scss">

</style>