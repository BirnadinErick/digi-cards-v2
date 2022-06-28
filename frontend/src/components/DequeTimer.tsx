import { Component } from 'solid-js';

const Timer: Component<{ seconds: number }> = (props) => {
	return (
		<div class='my-4 bg-accent rounded-xl cursor-progress p-4 text-black font-bold text-2xl text-center font-prata'>
			<p>{new Date(props.seconds * 1000).toISOString().substring(11, 19)}</p>
		</div>
	);
};

export default Timer;
