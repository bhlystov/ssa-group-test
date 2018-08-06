<template>
    <div class="container">
        <div class="search-wrapper">
            <div class="form-group">
                <input type="text"
                       class="form-control col-xs-6 col-md-6 col-lg-6"
                       placeholder="Filter by book name"
                       icon="search"
                       v-model="filter" >

                <select class="form-control col-xs-6 col-md-6 col-lg-6"
                        placeholder="Sort by"
                        v-model="sort">
                    <option
                            v-for="item in options"
                            :label="item.label"
                            :value="item.value"
                            :key="item.value">
                    </option>
                </select>
            </div>
        </div>
        <!--END search & filter wrapper -->

        <ul class="list-group col-xs-12 col-md-12 col-lg-12">
            <li v-for="item in collection" class="list-group-item">

                <!--TODO не хочет подгружать картинку с указаного пути через v-bind {{item.imgBook}} пока что указал на прямую-->
                <img src="./img/books.jpg" class="img-book">
                <div class="redirect-to">
                    <p class="book-name">
                        {{item.nameBook}}
                    </p>
                    <button class="btn btn-primary"
                            @click="redirectToBookDescription(item.idBook)">
                        Book description
                    </button>
                </div>

                <div class="redirect-to">
                    <p class="author-name">
                        {{item.authorBook.name}}
                    </p>
                    <button class="btn btn-primary"
                            @click="redirectToAuthorListOfBooks(item.authorBook.idAuthor)">
                        Author info...
                    </button>
                </div>
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

    export default {
        name: 'BooksList',
        components: {
        },
        props: {
            setNumberOfPage: {
                type: Number,
                default() {
                    return 1;
                },
            },
            sortBy: {
                type: String,
                default() {
                    return '';
                },
            },
            filterBookName: {
                type: String,
                default() {
                    return '';
                },
            }
        },
        data() {
            return {
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                perPage: 3,
                pagination: {},
                listOfBooks: [],
                filter: this.filterBookName,
                sort: this.sortBy,
                options: [
                    { label: 'By default', value: '' },
                    { label: 'Sorting a-z', value: 'a-z' },
                    { label: 'Sorting z-a', value: 'z-a' },
                ],
            }
        },
        computed: {
            /**
             * Filtering books name
             */
            getFilteredListOfBooks() {
                let listBooks = this.listOfBooks.filter((book) => {
                    return book.nameBook.toLowerCase().includes(this.filter.toLowerCase());
                });

                if (this.sort == 'a-z') {
                    return listBooks.sort();
                } else if(this.sort == 'z-a') {
                    return listbooks.sort().reverse();
                } else {
                    return listBooks;
                }
            },
            /**
             * Paginate and return books collection
             */
            collection() {
                return this.paginate(this.getFilteredListOfBooks);
            }
        },
        watch: {
            filter() {
                this.updateRouteParamsMainWay();
            },
            sort() {
                this.updateRouteParamsMainWay();
            }
        },
        mounted() {
            this.reload();
            this.setPage(this.$route.query.setNumberOfPage ? this.$route.query.setNumberOfPage : 1);
        },
        methods: {
            /**
             * Redirects to other pages
             */
            redirectToBookDescription(idBook) {
                this.$router.push({name: 'bookDescription', query: {idBook: idBook}});
            },
            redirectToAuthorListOfBooks(idAuthor) {
                this.$router.push({name: 'author', query: {authorId: idAuthor}});
            },
            /**
             * Pagination methods
             */
            setPage(p) {
                this.pagination = this.paginator(this.data.length, p);
                this.$router.push({
                    path: '/',
                    query: {
                        setNumberOfPage: p,
                        sortBy: this.sort,
                        filterBookName: this.filter,
                    }
                });
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
            updateRouteParamsMainWay() {
                this.$router.push({
                    path: '/',
                    query: {
                        setNumberOfPage: this.setNumberOfPage,
                        sortBy: this.sort,
                        filterBookName: this.filter
                    }
                });
            },
            /**
             * Get data of the list of books
             * @returns {Array}
             */
            async reload() {
                this.listOfBooks  = await apiClient.getBooksListData();
            },
        },
    }
</script>
<style lang="scss" scoped>
    .container {
        .list-group {
            overflow: hidden;
            flex-direction: row;
            .list-group-item {
                width: 33%;
                margin-right: 10px;
                margin-bottom: 10px;

                .img-book {
                    display: block;
                    width: 100%;
                }
                .redirect-to {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    margin: 10px 0;

                    p {
                        margin: auto;
                    }
                }
            }
        }

        .btn-toolbar {
            display: flex;
            justify-content: center;
        }
    }
</style>