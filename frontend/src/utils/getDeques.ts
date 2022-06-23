import axios, { AxiosError } from 'axios';
import setUserToken from './authenticateUser';

const retryKey = 'retryDeque';

async function getDeques(url: string, t: string | null) {
	try {
		const { data, status } = await axios.get(url, {
			headers: {
				Authorization: `T ${t}`,
			},
		});

		if (status === 200) {
			return data;
		}

		throw new Error(`Something went wrong, status code ${status}`);
	} catch (error) {
		if (error instanceof AxiosError) {
			// if 401 status, then retry with login creds
			if (
				error.response?.status === 401 &&
				sessionStorage.getItem(retryKey) !== '1'
			) {
				console.log('retrying after 401 fail...');
				sessionStorage.setItem(retryKey, '1');
				setUserToken('http://localhost:4009/api/login/', true).then(
					await getDeques(url, sessionStorage.getItem('t'))
				);
			}
			sessionStorage.removeItem(retryKey);
			// TODO: send error log to an log endpoint
			console.error(error);
		}
	}
}

export default getDeques;
