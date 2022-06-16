import { useParams } from 'solid-app-router';
import { Component, createSignal, lazy } from 'solid-js';

// components
const Card = lazy(() => import('../components/DigiCard'));
const DequeMeta = lazy(() => import('../components/DequeMeta'));
const DequeActions = lazy(() => import('../components/DequeActions'));

// reactive elements
const [answer, setAnswer] = createSignal(10);
const [seconds, setSeconds] = createSignal(5 * 60);

// util funcs
function onClickAnswer(id: number) {
	setAnswer(id);
}
const Deque: Component = () => {
	return (
		<div class='flex justify-between'>
			<Card answer={answer} onClickAnswer={onClickAnswer} />

			<div class='mx-8 my-2 w-2/5'>
				<DequeMeta />

				<DequeActions setSeconds={setSeconds} seconds={seconds} />
			</div>
		</div>
	);
};

export default Deque;
