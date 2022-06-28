import { Component, For } from 'solid-js';
import { CardT } from '../utils/types';

const Card: Component<{
	card: CardT;
	index: number;
	onClickAnswer: Function;
}> = (props) => {
	return (
		<div class='bg-base-300 p-4 rounded-lg mb-16'>
			<h1 class='text-xl font-noto'>
				<span class='font-prata font-xl font-bold italic'>Qu.</span>{' '}
				{props.card.question}
			</h1>

			<div>
				<For each={props.card.answers.split(',')}>
					{(answer, answer_index) => {
						return (
							// Answer Component
							<>
								<div class='form-control bg-black p-2 rounded-lg text-white my-4'>
									<label class='label cursor-pointer'>
										<span class=' text-md font-noto'>{answer}</span>
										<input
											value={answer_index().toString()}
											type='radio'
											name={`radio-${props.index}`}
											class='radio border-error radio-accent checked:bg-accent'
											onInput={() => {
												props.onClickAnswer(answer_index() + 1, props.card.id);
											}}
										/>
									</label>
								</div>
							</>
						);
					}}
				</For>
			</div>
		</div>
	);
};

export default Card;
