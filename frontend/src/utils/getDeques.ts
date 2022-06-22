import axios, { AxiosError } from 'axios';
import setUserToken from './authenticateUser';

const retryKey = 'retryDeque';

async function getDeques(url: string, t: string | null) {
	if (t === null) {
		throw new Error('Token missing from the storage!');
	}
	try {
		const { data, status } = await axios.get(url, {
			headers: {
				Authorization: `T ${t}`,
			},
		});

		if (status === 200) {
			return data;
		} else {
			if (status === 401 && sessionStorage.getItem(retryKey) !== '1') {
				console.log('retrying after 401 fail...');

				sessionStorage.setItem(retryKey, '1');
				await setUserToken('http://localhost:4009/api/login/', true);
				await getDeques(url, sessionStorage.getItem('t'));
			}
			sessionStorage.removeItem(retryKey);
			throw new Error(`Request failed with code ${status}`);
		}
	} catch (error) {
		// TODO: send error log to an log endpoint
		console.error(error);
		if (error instanceof AxiosError) {
			if (
				error.response?.status === 401 &&
				sessionStorage.getItem(retryKey) !== '1'
			) {
				console.log('retrying after 401 fail...');
				sessionStorage.setItem(retryKey, '1');
				await setUserToken('http://localhost:4009/api/login/', true);
				await getDeques(url, sessionStorage.getItem('t'));
			}
			sessionStorage.removeItem(retryKey);
		}
	}
}

export default getDeques;
