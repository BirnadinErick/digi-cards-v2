import { Component } from 'solid-js';

const UserAvatar: Component<{ w: number; m: number }> = (props) => {
	return (
		<div class='avatar'>
			<div class={`m-${props.m} w-${props.w} rounded-full`}>
				<img src='https://api.lorem.space/image/game' />
			</div>
		</div>
	);
};

export default UserAvatar;
