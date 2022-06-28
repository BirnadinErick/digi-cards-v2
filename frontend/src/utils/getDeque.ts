import axios from 'axios';
import { BASEURL } from './constants';

function getDeque(id: number) {
	return axios({
		baseURL: BASEURL,
		url: `/deques/${id}`,
		method: 'GET',
		headers: { Authorization: `T ${sessionStorage.getItem('t')}` },
		responseType: 'json',
	})
		.then((response) => {
			return response.data;
		})
		.catch((e) => {
			console.error(e);
		});
}

export default getDeque;
