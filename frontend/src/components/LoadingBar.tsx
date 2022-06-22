import type { Component } from 'solid-js';

const LoadingBar: Component = () => {
	return (
		<div class='flex justify-center w-screen m-24'>
			<div>
				<p class='font-prata text-black text-xl dark:text-white'>Loading...</p>
				<progress class='progress progress-primary w-96'></progress>
			</div>
		</div>
	);
};

export default LoadingBar;
