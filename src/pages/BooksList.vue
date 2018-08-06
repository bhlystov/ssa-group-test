<template>
    <div class="container">
        <el-row class="search-wrapper" :gutter="10">

            <el-col :lg="12" :md="12" :sm="12" :xs="24">
                <el-input placeholder="Filter by Name" icon="search" v-model="filter" />
            </el-col>

            <el-col class="col-space" :lg="6" :md="6" :sm="6" :xs="24"> &nbsp; </el-col>

            <el-col :lg="6" :md="6" :sm="6" :xs="24">
                <el-select v-model="sort" placeholder="Sort by">
                    <el-option
                            v-for="item in options"
                            :label="item.label"
                            :value="item.value"
                            :key="item.value">

                    </el-option>
                </el-select>
            </el-col>

        </el-row> <!-- search wrapper -->

        <ul class="list-group">
            <li v-for="item in collection" class="list-group-item">
                <!--TODO не хочет подгружать картинку с указаного пути через v-bind пока что указал на прямую-->
                <img src="./img/books.jpg" class="img-book">
                <p class="book-name"
                   @click="redirectToAuthorListOfBooks(item.idBook)">
                    {{item.nameBook}}
                </p>
                <p class="author-name"
                   @click="redirectToBookDescription(item.idBook)">
                    {{item.authorBook.name}}
                </p>
                <!--{{ item.idBook }}-->
                <!--{{ item.nameBook }}-->
                <!--{{ item.imgBook }}-->
                <!--{{ item.authorBook.idAuthor }}-->
                <!--{{ item.authorBook.name }}-->
                <!--{{ item.descriptionOfBook }}-->
            </li>
        </ul>
        <hr>
        <div class="btn-toolbar">
            <div class="btn-group">
                <button class="btn btn-primary" v-for="p in pagination.pages" @click.prevent="setPage(p)">{{p}}</button>
            </div>
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
            sortBy: {
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
                listOfBooks: [],

                filter: '',
                sort: '',
                options: [
                    { label: 'По умолчанию', value: '' },
                    { label: 'Сортировка по имени автора а-я', value: 'а-я' },
                    { label: 'Сортировка по имени автора а-a', value: 'я-а' },
                ],
            }
        },
        computed: {
            /**
             * Filtering books name
             */
            getFilteredListOfBooks() {

                let listbooks = this.listOfBooks.filter((book) => {
                    return book.nameBook.toLowerCase().includes(this.filter.toLowerCase());
                });

                if (this.sort == 'а-я') {
                    return listbooks.sort();
                } else if(this.sort == 'я-а') {
                    return listbooks.sort().reverse();
                } else {
                    return listbooks;
                }

            },
            /**
             * Paginate and return books collection
             */
            collection() {
                return this.paginate(this.getFilteredListOfBooks);
            }
        },
        mounted() {
            this.setPage(1);
            this.reload();
        },
        methods: {
            redirectToBookDescription(idBook) {
                this.$router.push({name: 'bookDescription', query: {idBook: idBook}});
            },
            redirectToAuthorListOfBooks(idAuthor) {
                this.$router.push({name: 'author', query: {authorId: idAuthor}});
            },
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
                this.listOfBooks  = await apiClient.getBooksListData();
                this.loading = false;
            },
        },
    }
</script>
<style lang="scss">
    .list-group {
        overflow: hidden;
        .list-group-item {
            width: 37%;
            display: block;
            float: left;
            /*display: flex;*/
            /*flex-direction: column;*/
            /*justify-content: center;*/
            /*align-items: center;*/
            margin-right: 10px;
            margin-bottom: 10px;
        }
    }
</style>