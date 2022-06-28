import { Component } from 'solid-js';

const CompletedCards: Component<{ doneCount: number; total: number }> = (
	props
) => {
	return (
		<div class='bg-white rounded-md p-4'>
			<p class='uppercase font-2xl text-center cursor-help font-noto text-black'>
				{props.doneCount} of {props.total} Cards Answered
			</p>
		</div>
	);
};

export default CompletedCards;
