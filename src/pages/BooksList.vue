<template>
    <div>
        <h1>Подтянуло Books List</h1>
        <div id="app" class="container">
            <h1 class="page-header">Pagination with Vue.JS</h1>
            <ul class="list-group">
                <li v-for="item in collection" class="list-group-item">
                    {{ item }}
                </li>
            </ul>
            <hr>
            <div class="btn-toolbar">
                <div class="btn-group">
                    <button class="btn btn-primary" v-for="p in pagination.pages" @click.prevent="setPage(p)">{{p}}</button>
                </div>
            </div>
            Displaying from indexes {{ pagination.startIndex }} to {{ pagination.endIndex }}.
        </div>
    </div>
</template>
<script>
    import apiClient from "./api/client";
    import { format, subDays, parse } from "date-fns";

    const formatDate = date => format(parse(date), 'DD.MM.YYYY');
    const formatDateTime = date => format(parse(date), 'DD.MM.YYYY / H:mm');

    export default {
        name: 'BooksList',
        components: {
        },
        props: {
            companyId: {
                type: Number,
                default() {
                    return 1;
                },
            },
            dateFrom: {
                type: String,
                default() {
                    return formatDate(subDays(new Date(), 30));
                },
            },
            dateTo: {
                type: String,
                default() {
                    return formatDate(new Date());
                },
            },
            groupBy: {
                type: String,
                default: 'month',
            },
        },
        data() {
            return {
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                perPage: 3,
                pagination: {},

                loading: false,
                dataListToggle: [{label: "день", code: "day"}, {label: "месяц", code: "month"}],
                listOfBooks: [],
                isFinishedLoadingDataFromServer: false,
            }
        },
        computed: {
            collection() {
                return this.paginate(this.data);
            }
        },
        mounted() {
            this.setPage(1);
            this.reload();
        },
        methods: {
            setPage(p) {
                this.pagination = this.paginator(this.data.length, p);
            },
            paginate(data) {
                return _.slice(data, this.pagination.startIndex, this.pagination.endIndex + 1)
            },
            paginator(totalItems, currentPage) {
                var startIndex = (currentPage - 1) * this.perPage,
                    endIndex = Math.min(startIndex + this.perPage - 1, totalItems - 1);
                return {
                    currentPage: currentPage,
                    startIndex: startIndex,
                    endIndex: endIndex,
                    pages: _.range(1, Math.ceil(totalItems / this.perPage) + 1)
                };
            },

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