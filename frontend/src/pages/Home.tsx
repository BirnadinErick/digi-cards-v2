import { Component, createResource, Show, Suspense } from 'solid-js';
import { onMount } from 'solid-js';
import HomeUserMeta from '../components/HomeUserMeta';
import LoadingBar from '../components/LoadingBar';
import Stats from '../components/Stats';
import UserAvatar from '../components/UserAvatar';
import setuserToken from '../utils/authenticateUser';
import getProfile from '../utils/getProfile';

const Home: Component = () => {
	const [profile] = createResource(async () => {
		return getProfile(1);
	});

	onMount(() => {
		setuserToken('http://localhost:4009/api/login/');
	});

	return (
		<Suspense fallback={<LoadingBar />}>
			<Show when={profile()}>
				<div class='m-8 w-auto h-auto p-8 rounded-lg'>
					<div class='bg-base-300 rounded-xl flex justify-start'>
						<UserAvatar w={64} m={12} src={profile().avatar} />

						<HomeUserMeta uname={profile().username} note={profile().note} />
					</div>

					<div class='my-16 border-solid border border-secondary'></div>

					<Stats respect={profile().respect} d_master={21} rank={1} />
				</div>
			</Show>
		</Suspense>
	);
};

export default Home;
