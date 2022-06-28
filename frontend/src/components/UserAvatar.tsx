import { Component } from 'solid-js';

const UserAvatar: Component<{ w: number; m: number; src: string }> = (
	props
) => {
	return (
		<div class='avatar'>
			<div class={`m-${props.m} w-${props.w} rounded-full`}>
				<img src={props.src} />
			</div>
		</div>
	);
};

export default UserAvatar;
