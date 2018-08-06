<template>
    <div>
        <img src="" alt="">
        <button class="btn btn-success">Previous page</button>
        <h1>Мы перешли на book Desciption</h1>
    </div>
</template>
<script>
    import apiClient from "./api/client";
    export default {
        name: 'BookDescription',
        components: {},
        props: {
            idBook: {
                type: Number,
            },
        },
        mounted() {
            console.log(this.idBook);
            this.reload();
        },
        methods: {
            async reload() {
                this.loading = true;
                this.listOfBooks  = await apiClient.getBooksListData();
                this.isFinishedLoadingDataFromServer = true;
                this.loading = false;
                console.log(this.listOfBooks);
            },
        },
    }
</script>
<style lang="scss">

</style>