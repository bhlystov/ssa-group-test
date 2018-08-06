<template>
    <div class="book-description">
        <h1>We switched to book Description</h1>
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

        <ul class="list-group  col-xs-12 col-md-12 col-lg-12">
            <li v-for="item in bookDescriptionList" class="list-group-item col-xs-4 col-md-4 col-lg-4">
                <img src="./img/books.jpg" class="img-book">
                <h3>Name of book: {{item.nameBook}}</h3>
                <div class="redirect-to">
                    <p class="author-name">
                        Author: {{item.authorBook.name}}
                    </p>
                    <button class="btn btn-primary"
                            @click="redirectToAuthorListOfBooks(item.authorBook.idAuthor)">
                        Author info...
                    </button>
                </div>
                <p class="description">Description of book: {{item.descriptionOfBook}}</p>
            </li>
        </ul>
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
        data() {
            return {
                listOfBooks: [],
                localIdBook : this.idBook ? this.idBook : this.$route.query.idBook,
            }
        },
        computed: {
            bookDescriptionList() {
                return this.listOfBooks.filter( item => this.localIdBook === item.idBook);
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
            redirectToAuthorListOfBooks(idAuthor) {
                this.$router.push({name: 'author', query: {authorId: idAuthor}});
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
    .book-description {
        .list-group {
            flex-wrap: wrap;
            .list-group-item {
                .img-book {
                    display: block;
                    width: 100%;
                }
                .redirect-to {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    p {
                        margin: inherit;
                    }
                }
                .description {
                    margin-top: 14px;
                }
            }
        }
    }
</style>