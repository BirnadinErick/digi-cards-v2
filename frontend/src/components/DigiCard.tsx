import { Component, lazy } from 'solid-js';
const Answer = lazy(() => import('../components/Answer'));

const Card: Component<{ answer: Function; onClickAnswer: Function }> = (
	props
) => {
	return (
		<div class='mx-8 my-2 bg-base-300 p-8 w-3/5 rounded-lg'>
			<img
				src={
					'https://unsplash.com/photos/PkiHF-EeT6o/download?ixid=MnwxMjA3fDB8MXxhbGx8M3x8fHx8fDJ8fDE2NTQ0MjUwMjM&force=true&w=640'
				}
				alt='card-image'
			/>

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
