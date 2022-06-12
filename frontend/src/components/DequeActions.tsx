import { Component } from 'solid-js';

const DequeActions: Component<{ setSeconds: Function; seconds: Function }> = (
	props
) => {
	setInterval(() => {
		props.setSeconds(props.seconds() - 1);
	}, 1000);

	return (
		<div class='mt-2 bg-base-300  rounded-lg p-8 cursor-default'>
			<div class='bg-white rounded-md p-4'>
				<p class='font-bold uppercase font-2xl text-center font-prata text-black'>
					2 of 7 Cards Answered
				</p>
			</div>

			<div class='mt-16'>
				<div class='mb-16 bg-accent rounded-xl cursor-not-allowed p-4 text-black font-bold text-2xl text-center font-prata'>
					<p>
						{new Date(props.seconds() * 1000).toISOString().substring(11, 19)}
					</p>
				</div>

				<div class='deque-action-btn bg-info hover:font-bold hover:bg-white'>
					<p>Previous Card</p>
				</div>

				<div class='deque-action-btn bg-info hover:font-bold hover:bg-white'>
					<p>Next Card</p>
				</div>

				<div class='deque-action-btn bg-success hover:font-bold hover:bg-white'>
					<p>Submit the Deque</p>
				</div>

				<div class='deque-action-btn bg-error hover:font-bold hover:bg-black text-white'>
					<p>Quit Deque</p>
				</div>
			</div>
		</div>
	);
};

export default DequeActions;
