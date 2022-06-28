import axios from 'axios';
import { BASEURL } from './constants';

function getProfile(id: number) {
	return axios({
		baseURL: BASEURL,
		url: `/profiles/${id}`,
		method: 'GET',
		headers: { Authorization: `T ${sessionStorage.getItem('t')}` },
		responseType: 'json',
	})
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.error(error);
		});
}

export default getProfile;
