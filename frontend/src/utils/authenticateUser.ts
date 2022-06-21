import axios from 'axios';

type TokenResponse = {
	expiry: string;
	token: string;
};

async function getToken(url: string, uname: string, passwd: string) {
	const { data, status } = await axios.post<TokenResponse>(
		url,
		{
			withCredentials: true,
		},
		{
			auth: {
				username: uname,
				password: passwd,
			},
		}
	);

	if (status === 200) {
		return data['token'];
	} else {
		throw new Error('Failed to recieve token');
	}
}

async function setUserToken(url: string, force: boolean = false) {
	if (force === false) {
		if (sessionStorage.getItem('t')) {
			return;
		}
	}

	// TODO: get the creds using form
	const username: string = 'beric';
	const passwd: string = '123'; //! TODO:encrypt the passwd and sent

	// request token
	const token = await getToken(url, username, passwd);

	// set token
	sessionStorage.setItem('t', token);
	return;
}

export default setUserToken;
