import axios from 'axios';
import qs from 'qs';

/**
 * Temporary API client
 */
class ApiClient {

    async getDataList() {
        // const responseData = await this.request('get', url);

        //TODO Temporary solution
        const responseData = [
            {
                "id": "1",
                "url": "service01.png",
                "title": "Foto Bewerking",
                "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi architecto assumenda cum distinctio, dolorem eum ipsa mollitia nobis numquam odit quaerat qui tempore, tenetur."
            },
            {
                "id": "2",
                "url": "service02.png",
                "title": "Illustratie",
                "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi architecto assumenda cum distinctio, dolorem eum ipsa mollitia nobis numquam odit quaerat qui tempore, tenetur."
            },
            {
                "id": "3",
                "url": "service03.png",
                "title": "Video & Animate",
                "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            },
            {
                "id": "4",
                "url": "service04.png",
                "title": "3D Animate",
                "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi architecto assumenda cum distinctio, dolorem eum ipsa mollitia nobis numquam odit quaerat qui tempore, tenetur."
            }
        ];

         return responseData;
    }


    async getListContentText() {

        //TODO Temporary solution
        const responsetListContentText = [
            {
                "id": "1",
                "name": "aboutUs",
                "contentText_1": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid asperiores culpa doloribus eos explicabo nesciunt? Ab assumenda autem esse modi quae tenetur, voluptas? Blanditiis fuga ipsam quisquam ratione voluptatibus.",
                "contentText_2": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid asperiores culpa doloribus eos explicabo nesciunt? Ab assumenda autem esse modi quae tenetur, voluptas? Blanditiis fuga ipsam quisquam ratione voluptatibus.",
                "contentText_3": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid asperiores culpa doloribus eos explicabo nesciunt? Ab assumenda autem esse modi quae tenetur, voluptas? Blanditiis fuga ipsam quisquam ratione voluptatibus.",
                "contentText_4": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid asperiores culpa doloribus eos explicabo nesciunt? Ab assumenda autem esse modi quae tenetur, voluptas? Blanditiis fuga ipsam quisquam ratione voluptatibus."
            },
            {
                "id": "2",
                "name": "contacts",
                "contentText_1": "content-text-1",
                "contentText_2": "content-text-2",
                "contentText_3": "content-text-3",
                "contentText_4": "content-text-4",
            },

        ];

        return responsetListContentText;
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
