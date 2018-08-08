<template>
    <div class="author-list-books">
        <h1>We switched to a page with available books by the author</h1>
        <button
                class="btn btn-success"
                @click="goBack(-1)"
        >
            GoBack
        </button>
        <button
                class="btn btn-success"
                @click="goHome()"
        >
            GoHome
        </button>

        <ul class="list-group col-xs-12 col-md-12 col-lg-12">
            <li v-for="item in listOfBooksByAuthor" class="list-group-item">
                <h3>Author: {{item.name}}</h3>

                <ul class="list-group book-container col-xs-12 col-md-12 col-lg-12">
                    <li
                        class="list-group-item book-item"
                        v-for="books in item.listBooks"
                    >
                        <img :src="require(`@/assets/${books.imgBook}`)" class="img-book">
                        <div class="redirect-to">
                            <p class="book-name">
                                {{books.nameBook}}
                            </p>
                            <button class="btn btn-primary"
                                    @click="redirectToBookDescription(books.idBook)">
                                Book description
                            </button>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
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
        data() {
            return {
                authorListOfBooks: [],
                localAuthorId : this.authorId ? this.authorId : this.$route.query.authorId,
            }
        },
        computed: {
            listOfBooksByAuthor() {
                return this.authorListOfBooks.filter( item => this.localAuthorId === item.idAuthor);
            }
        },
        mounted() {
            this.reload();
        },
        methods: {
            /**
             * Redirects to other pages
             */
            goBack(step) {
                this.$router.go(step);
            },
            goHome() {
                this.$router.push({path: '/'});
            },
            redirectToBookDescription(idBook) {
                this.$router.push({name: 'bookDescription', query: {idBook: idBook}});
            },
            /**
             * Get data of the list of books
             * @returns {Array}
             */
            async reload() {
                this.authorListOfBooks  = await apiClient.getAuthorListBooks();
            },
        }
    }
</script>
<style lang="scss" scoped>
    .author-list-books {
        .list-group {
            .book-container {
                overflow: hidden;
                flex-direction: row;
                flex-wrap: wrap;

                .book-item {
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
        }
    }
</style>