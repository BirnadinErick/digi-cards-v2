import { Component, createSignal, lazy } from 'solid-js';

const Card = lazy(() => import('../components/DigiCard'));
const DequeMeta = lazy(() => import('../components/DequeMeta'));
const DequeActions = lazy(() => import('../components/DequeActions'));

const [answer, setAnswer] = createSignal(-1);
const [seconds, setSeconds] = createSignal(5 * 60);

function onClickAnswer(id: number) {
	setAnswer(id);
}

const Deques: Component = () => {
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

export default Deques;
