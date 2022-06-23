import {
	Component,
	createSignal,
	lazy,
	createResource,
	Suspense,
	Show,
	For,
} from 'solid-js';
import { useSearchParams } from 'solid-app-router';
import getCards from '../utils/getCards';
import LoadingBar from '../components/LoadingBar';
import { CardT } from '../utils/types';

// components
const DequeMeta = lazy(() => import('../components/DequeMeta'));

// components
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

const Timer: Component<{ seconds: number }> = (props) => {
	return (
		<div class='my-4 bg-accent rounded-xl cursor-progress p-4 text-black font-bold text-2xl text-center font-prata'>
			<p>{new Date(props.seconds * 1000).toISOString().substring(11, 19)}</p>
		</div>
	);
};

const ActionButtons: Component<{ styles: Array<string>; text: string }> = (
	props
) => {
	return (
		<div class={`deque-action-btn hover:font-bold ${props.styles.join(' ')}`}>
			<p>{props.text}</p>
		</div>
	);
};

const Deque: Component = () => {
	const [urlkwargs, _] = useSearchParams(); // get neccessary data from url
	// TODO: get time from cached deques instead of url params

	// signals
	const [answers, setAnswers] = createSignal(new Map<number, number>());
	const [cardsDone, setCardDone] = createSignal(0);
	const [seconds, setSeconds] = createSignal(parseInt(urlkwargs.t));

	// answer click handler
	function onClickAnswer(aid: number, cid: number) {
		if (answers().has(cid) !== true) {
			setCardDone(cardsDone() + 1);
		}
		setAnswers(answers().set(cid, aid));
	}

	// createResource wrapper
	async function getCardsWrapper() {
		return await getCards(
			`http://localhost:4009/api/card/${urlkwargs.i}`,
			sessionStorage.getItem('t')
		);
	}
	const [cards] = createResource(getCardsWrapper); // create resource

	// register timer and set the PID in session storage to unregister
	const timerPID = setInterval(() => {
		if (seconds() === 0) {
			// unregister
			clearInterval(parseInt(sessionStorage.getItem('timerPID')!));
		} else {
			// decrement the seconds
			setSeconds(seconds() - 1);
		}
	}, 1000);
	sessionStorage.setItem('timerPID', timerPID.toString()); // save PID to unregister

	// setInterval(() => {
	// 	console.log(answers());
	// 	console.log(cards());
	// }, 5 * 1000);

	return (
		<div class='flex justify-between'>
			<main class='w-full mx-4 py-4'>
				<DequeMeta />
				<Suspense fallback={<LoadingBar />}>
					<Show when={cards()}>
						<For each={cards()}>
							{(card: CardT, index) => {
								return (
									<div class='bg-base-300 p-4 rounded-lg mb-16'>
										<h1 class='text-xl font-noto'>
											<span class='font-prata font-xl font-bold italic'>
												Qu.
											</span>{' '}
											{card.question}
										</h1>

										<div>
											<For each={card.answers.split(',')}>
												{(answer, answer_index) => {
													return (
														<>
															<div class='form-control bg-black p-2 rounded-lg text-white my-4'>
																<label class='label cursor-pointer'>
																	<span class=' text-md font-noto'>
																		{answer}
																	</span>
																	<input
																		value={answer_index().toString()}
																		type='radio'
																		name={`radio-${index()}`}
																		class='radio border-error radio-accent checked:bg-accent'
																		onInput={() => {
																			onClickAnswer(
																				answer_index() + 1,
																				card.id
																			);
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
							}}
						</For>
					</Show>
				</Suspense>
			</main>

			<div class='ml-8 my-2 w-2/5 mt-64'>
				<div class='mt-2 bg-base-300 rounded-lg p-8 cursor-default fixed'>
					<Suspense
						fallback={<CompletedCards doneCount={cardsDone()} total={2003} />}
					>
						<Show when={cards()}>
							<CompletedCards doneCount={cardsDone()} total={cards().length} />
						</Show>
					</Suspense>

					<Timer seconds={seconds()} />

					<div class='mt-8'>
						<ActionButtons
							styles={['bg-success', 'hover:bg-white']}
							text='Submit Deque'
						/>
						<ActionButtons
							styles={['hover:bg-black', 'text-white', 'bg-error']}
							text='Quit Deque'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Deque;
