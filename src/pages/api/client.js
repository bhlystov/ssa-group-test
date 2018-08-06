import axios from 'axios';

import qs from 'qs';

/**
 * Temporary API client
 */
class ApiClient {

    async getBooksListData() {

        const booksListData = [
            {
                idBook: 1,
                nameBook: 'Game of thrones',
                imgBook: "./img/books.jpg",
                authorBook: {
                    idAuthor: 1,
                    name: 'Johny Depp',
                },
                descriptionOfBook: 'Some description about book...'
            },
            {
                idBook: 2,
                nameBook: 'Holly Bible',
                imgBook: "./img/books.jpg",
                authorBook: {
                    idAuthor: 1,
                    name: 'Johny Depp',
                },
                descriptionOfBook: 'Some description about book...'
            },
            {
                idBook: 3,
                nameBook: 'Harry Potter 2',
                imgBook: "./img/books.jpg",
                authorBook: {
                    idAuthor: 2,
                    name: 'Joan Rouling',
                },
                descriptionOfBook: 'Some description about book...'
            },
            {
                idBook: 4,
                nameBook: 'Fighting club',
                imgBook: "./img/books.jpg",
                authorBook: {
                    idAuthor: 3,
                    name: 'Chack Palanik',
                },
                descriptionOfBook: 'Some description about book...'
            },
            {
                idBook: 5,
                nameBook: 'Rich dad Pour dad',
                imgBook: "./img/books.jpg",
                authorBook: {
                    idAuthor: 4,
                    name: 'Robert Kiosake',
                },
                descriptionOfBook: 'Some description about book...'
            },
            {
                idBook: 6,
                nameBook: 'Stalker',
                imgBook: "./img/books.jpg",
                authorBook: {
                    idAuthor: 5,
                    name: 'Братья Стругацкие',
                },
                descriptionOfBook: 'Some description about book...'
            },
            {
                idBook: 7,
                nameBook: 'The nordic history about everything',
                imgBook: "./img/books.jpg",
                authorBook: {
                    idAuthor: 6,
                    name: 'NoName Author',
                },
                descriptionOfBook: 'Some description about book...'
            },
            {
                idBook: 8,
                nameBook: "Stalker 'Луннь'",
                imgBook: "./img/books.jpg",
                authorBook: {
                    idAuthor: 7,
                    name: 'Ежи тумановский',
                },
                descriptionOfBook: 'Some description about book...'
            },
            {
                idBook: 9,
                nameBook: 'It',
                imgBook: "./img/books.jpg",
                authorBook: {
                    idAuthor: 8,
                    name: 'Stiven Kipling',
                },
                descriptionOfBook: 'Some description about book...'
            },
            {
                idBook: 10,
                nameBook: 'World War',
                imgBook: "./img/books.jpg",
                authorBook: {
                    idAuthor: 8,
                    name: 'Stiven Kipling',
                },
                descriptionOfBook: 'Some description about book...'
            },
            {
                idBook: 11,
                nameBook: 'Harry Potter 3',
                imgBook: "./img/books.jpg",
                authorBook: {
                    idAuthor: 2,
                    name: 'Joan Rouling',
                },
                descriptionOfBook: 'Some description about book...'
            },
        ];

        return booksListData;
    }

    async getAthorListBooks() {

        const responseAthorListBooks = [
            {
                idAuthor: 1,
                name: 'Johny Depp',
                listBooks: [
                    {
                        idBook: 1,
                        nameBook: 'Game of thrones',
                        imgBook: '/src/img/books.jpg',
                        descriptionOfBook: 'Some description about book...'
                    },
                    {
                        idBook: 2,
                        nameBook: 'Holly Bible',
                        imgBook: '/src/img/books.jpg',
                        descriptionOfBook: 'Some description about book...'
                    }
                ]
            },
            {
                idAuthor: 2,
                name: 'Johny Depp',
                listBooks: [
                    {
                        idBook: 3,
                        nameBook: 'Harry Potter 2',
                        imgBook: '/src/img/books.jpg',
                        descriptionOfBook: 'Some description about book...'
                    },
                    {
                        idBook: 11,
                        nameBook: 'Harry Potter 3',
                        imgBook: '/src/img/books.jpg',
                        descriptionOfBook: 'Some description about book...'
                    }
                ]
            },
            {
                idAuthor: 3,
                name: 'Johny Depp',
                listBooks: [
                    {
                        idBook: 4,
                        nameBook: 'Fighting club',
                        imgBook: '/src/img/books.jpg',
                        descriptionOfBook: 'Some description about book...'
                    }
                ]
            },
            {
                idAuthor: 4,
                name: 'Robert Kiosake',
                listBooks: [
                    {
                        idBook: 5,
                        nameBook: 'Rich dad Pour dad',
                        imgBook: '/src/img/books.jpg',
                        descriptionOfBook: 'Some description about book...'
                    }
                ]
            },
            {
                idAuthor: 5,
                name: 'Братья Стругацкие',
                listBooks: [
                    {
                        idBook: 6,
                        nameBook: 'Stalker',
                        imgBook: '/src/img/books.jpg',
                        descriptionOfBook: 'Some description about book...'
                    }
                ]
            },
            {
                idAuthor: 6,
                name: 'NoName Author',
                listBooks: [
                    {
                        idBook: 7,
                        nameBook: 'The nordic history about everything',
                        imgBook: '/src/img/books.jpg',
                        descriptionOfBook: 'Some description about book...'
                    }
                ]
            },
            {
                idAuthor: 7,
                name: 'Ежи тумановский',
                listBooks: [
                    {
                        idBook: 8,
                        nameBook: "Stalker 'Луннь'",
                        imgBook: '/src/img/books.jpg',
                        descriptionOfBook: 'Some description about book...'
                    }
                ]
            },
            {
                idAuthor: 8,
                name: 'Stiven Kipling',
                listBooks: [
                    {
                        idBook: 9,
                        nameBook: 'It',
                        imgBook: '/src/img/books.jpg',
                        descriptionOfBook: 'Some description about book...'
                    },
                    {
                        idBook: 10,
                        nameBook: 'World War',
                        imgBook: '/src/img/books.jpg',
                        descriptionOfBook: 'Some description about book...'
                    }
                ]
            },
        ];

        return responseAthorListBooks;
    }

    async request(method, url, data, params) {
        let response;

        try {
            response = await axios({
                method,
                url,
                data,
                params,
                paramsSerializer(params) {
                    return qs.stringify(params, {arrayFormat: 'brackets'})
                },
            });
        } catch (e) {
            throw e;
        }

        return response.data;
    }
}

export default new ApiClient();
