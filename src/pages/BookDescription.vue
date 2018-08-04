<template>
    <div>
        <img src="" alt="">
    </div>
</template>
<script>
    export default {
        name: 'BookDescription',
        components: {},
        props: {
            bookData: {
                type: Array,
            },
        },
        mounted() {
            this.reload();
        },
        methods: {
            async reload() {
                this.loading = true;
                this.listOfBooks  = await apiClient.getBooksListData( this.companyId,  {from: this.$route.query.from, to: this.$route.query.to} );
                this.isFinishedLoadingDataFromServer = true;
                this.loading = false;
                console.log(this.listOfBooks);
            },
        },
    }
</script>
<style lang="scss">

</style>