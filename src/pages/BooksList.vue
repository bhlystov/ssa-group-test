<template>
    <div class="container">
        <div class="search-wrapper">
            <div class="form-group">
                <div class="input-group mb-3 col-xs-6 col-md-6 col-lg-6 book-name-filter">
                    <input type="text"
                           class="form-control"
                           placeholder="Filter by book name"
                           icon="search"
                           v-model="localFilterBookName" >
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary"
                                type="button"
                                @click="localFilterBookName=''"
                        >
                            Clear
                        </button>
                    </div>
                </div>

                <select class="form-control col-xs-6 col-md-6 col-lg-6"
                        placeholder="Sort by"
                        v-model="sortOptions">
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
                <img :src="require(`@/assets/${item.imgBook}`)" class="img-book">
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
                perPage: 5,
                pagination: {},
                listOfBooks: [],
                localFilterBookName: this.filterBookName,
                sortOptions: this.sortBy,
                options: [
                    { label: 'By default', value: '' },
                    { label: 'Sorting name author a-z', value: 'author[a-z]' },
                    { label: 'Sorting name author z-a', value: 'author[z-a]' },
                    { label: 'Sorting name book a-z', value: 'book[a-z]' },
                    { label: 'Sorting name book z-a', value: 'book[z-a]' },
                ],
            }
        },
        computed: {
            /**
             * Filtering books name, author name
             * @return {Array} filtered list of books
             */
            getFilteredListOfBooks() {
                //Filter on input
                let listBooks = this.listOfBooks.filter((book) => {
                    return book.nameBook.toLowerCase().includes(this.localFilterBookName.toLowerCase());
                });

                //Filter options
                if(this.sortOptions) {

                    switch (this.sortOptions) {
                        case 'author[a-z]':
                            return listBooks.sort( function(a, b) {
                                if (a.authorBook.name.toLowerCase() < b.authorBook.name.toLowerCase()) {
                                    return -1;
                                }
                                if (a.authorBook.name.toLowerCase() > b.authorBook.name.toLowerCase()) {
                                    return 1;
                                }
                                return 0;
                            });
                            break;
                        case 'author[z-a]':
                            return listBooks.sort( function(a, b) {
                                if (a.authorBook.name.toLowerCase() > b.authorBook.name.toLowerCase()) {
                                    return -1;
                                }
                                if (a.authorBook.name.toLowerCase() < b.authorBook.name.toLowerCase()) {
                                    return 1;
                                }
                                return 0;
                            });
                            break;
                        case 'book[a-z]':
                            return listBooks.sort( function(a, b) {
                                if (a.nameBook.toLowerCase() < b.nameBook.toLowerCase()) {
                                    return -1;
                                }
                                if (a.nameBook.toLowerCase() > b.nameBook.toLowerCase()) {
                                    return 1;
                                }
                                return 0;
                            });
                            break;
                        case 'book[z-a]':
                            return listBooks.sort( function(a, b) {
                                if (a.nameBook.toLowerCase() > b.nameBook.toLowerCase()) {
                                    return -1;
                                }
                                if (a.nameBook.toLowerCase() < b.nameBook.toLowerCase()) {
                                    return 1;
                                }
                                return 0;
                            });
                            break;
                    }

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
            localFilterBookName() {
                this.updateRouteParamsMainWay();
            },
            sortOptions() {
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
                        sortBy: this.sortOptions,
                        filterBookName: this.localFilterBookName,
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
                        sortBy: this.sortOptions,
                        filterBookName: this.localFilterBookName
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
        .search-wrapper {
            .book-name-filter {
                padding-left: 0;
                padding-right: 0;
                margin-top: 10px;
            }
        }

        .list-group {
            overflow: hidden;
            flex-direction: row;
            flex-wrap: wrap;
            .list-group-item {
                width: 30%;
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