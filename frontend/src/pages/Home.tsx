import type { Component } from "solid-js";
import HomeUserMeta from '../components/HomeUserMeta';
import Stats from '../components/Stats';
import UserAvatar from '../components/UserAvatar';

const Home: Component = () => {
	return (
		<div class='m-8 w-auto h-auto p-8 rounded-lg'>
			<div class='bg-base-300 rounded-xl flex justify-start'>
				<UserAvatar w={64} m={12} />

				<HomeUserMeta />
			</div>

			<div class='my-16 border-solid border border-secondary'></div>

			<Stats />
		</div>
	);
};

export default Home;
