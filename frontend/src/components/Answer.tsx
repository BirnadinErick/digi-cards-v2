import { Component, createSignal } from 'solid-js';

const Answer: Component<{
	aid: number;
	answer: string;
	onClickAnswer: Function;
}> = (props) => {
	return (
		<div
			class='my-4 p-4 bg-secondary rounded-lg hover:bg-primary cursor-pointer'
			onClick={() => {
				props.onClickAnswer(props.aid);
			}}
		>
			<p class='text-justify text-black text-md font-sans'>{props.answer}</p>
		</div>
	);
};

export default Answer;
