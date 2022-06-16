import { Component, lazy } from 'solid-js';
import DequeCardThumb from '../assets/deque_thumb_2.jpg';
const Answer = lazy(() => import('../components/Answer'));

const Card: Component<{ answer: Function; onClickAnswer: Function }> = (
	props
) => {
	return (
		<div class='mx-8 my-2 bg-base-300 p-8 w-auto h-auto rounded-lg'>
			<img src={DequeCardThumb} alt='card-image' />

			<p class='mt-8 mb-4 cursor-default font-prata text-lg'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste
				architecto officia sint rerum
			</p>

			<p class='cursor-default font-mono'>
				You chose:
				{props.answer() === -1
					? 'Nothing, Please choose an answer!'
					: props.answer()}
			</p>

			<Answer
				onClickAnswer={props.onClickAnswer}
				aid={1}
				answer='Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe istearchitecto officia sint rerum'
			/>
			<Answer
				onClickAnswer={props.onClickAnswer}
				aid={2}
				answer='Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe istearchitecto officia sint rerum'
			/>
			<Answer
				onClickAnswer={props.onClickAnswer}
				aid={3}
				answer='Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe istearchitecto officia sint rerum'
			/>
		</div>
	);
};

export default Card;
