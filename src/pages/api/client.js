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
