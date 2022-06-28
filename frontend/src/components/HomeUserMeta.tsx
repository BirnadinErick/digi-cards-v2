import { Component } from 'solid-js';

const HomeUserMeta: Component<{ uname: string; note: string }> = (props) => {
	return (
		<div class='m-12 mt-24'>
			<h1 class='font-prata text-5xl'>{props.uname}</h1>
			<p class='font-noto mt-8 text-black dark:text-info font-bold'>
				{props.note}
			</p>
		</div>
	);
};

export default HomeUserMeta;
