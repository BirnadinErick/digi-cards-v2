import {
	Component,
	createSignal,
	lazy,
	createResource,
	Suspense,
	Show,
	For,
} from 'solid-js';
import { Link, useSearchParams } from 'solid-app-router';
import getCards from '../utils/getCards';
import LoadingBar from '../components/LoadingBar';
import { CardT } from '../utils/types';
import axios from 'axios';
import { BASEURL } from '../utils/constants';
import getDeque from '../utils/getDeque';

// components
const DequeMeta = lazy(() => import('../components/DequeMeta'));
const Timer = lazy(() => import('../components/DequeTimer'));
const Card = lazy(() => import('../components/DigiCard'));
const DequeActionButton = lazy(() => import('../components/DequeActions'));
const CompletedCards = lazy(
	() => import('../components/CompletedCardsCounter')
);

const Deque: Component = () => {
	const [urlkwargs, _] = useSearchParams(); // get neccessary data from url
	// TODO: get time from cached deques instead of url params

	// signals
	const [answers, setAnswers] = createSignal(new Map<number, number>());
	const [cardsDone, setCardDone] = createSignal(0);
	const [seconds, setSeconds] = createSignal(0);
	const [score, setScore] = createSignal(0);
	const [isModalVisible, setModalVisibility] = createSignal(false);

	// createResource wrapper
	async function getCardsWrapper() {
		return await getCards(
			`http://localhost:4009/api/card/${urlkwargs.i}`,
			sessionStorage.getItem('t')
		);
	}

	async function getDequeWrapper() {
		const response = await getDeque(parseInt(urlkwargs.i));
		setSeconds(response.time);
		return response;
	}

	const [cards] = createResource(getCardsWrapper); // create resource cards
	const [deque] = createResource(getDequeWrapper); // create resource deque

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

	// submit answers
	function submitDeque(ans: Function) {
		var final_answers = {
			answers: Object.fromEntries(ans()),
		};

		axios({
			baseURL: BASEURL,
			url: '/validate-deque',
			method: 'POST',
			headers: { Authorization: `T ${sessionStorage.getItem('t')}` },
			responseType: 'json',
			data: final_answers,
		})
			.then((response) => {
				setScore(response.data.score);
				setModalVisibility(true);
			})
			.catch((e) => {
				console.error(e);
			});
	}

	// answer click handler
	function onClickAnswer(aid: number, cid: number) {
		if (answers().has(cid) !== true) {
			setCardDone(cardsDone() + 1);
		}
		setAnswers(answers().set(cid, aid));
	}

	return (
		<>
			<input type='checkbox' id='my-modal' class='modal-toggle' />
			<div class={`modal ${isModalVisible() === false ? '' : 'modal-open'}`}>
				<div class='modal-box'>
					<h3 class='font-bold text-lg'>Congrats! 🎉</h3>
					<Suspense fallback={<p>Submit to get score!</p>}>
						<Show when={deque()}>
							<p class='py-4 font-noto'>
								You scored{' '}
								<span class='font-prata font-2xl underline text-info'>
									{score()}
								</span>{' '}
								for deque{' '}
								<span class='text-accent uppercase mx-2 font-prata'>
									{deque().title}
								</span>
							</p>
						</Show>
					</Suspense>
					<div class='modal-action'>
						<Link href='/deques'>
							<DequeActionButton
								styles={['text-black', 'bg-info']}
								text='Conquer more Deques ⚔️'
								onClick={console.log}
							/>
						</Link>
					</div>
				</div>
			</div>
			<div class='flex justify-between'>
				<main class='w-full mx-4 py-4'>
					<Suspense fallback={<LoadingBar />}>
						<Show when={deque()}>
							<DequeMeta
								title={deque().title}
								category={deque().category}
								created_by={deque().owner}
								deque_master={deque().deque_master}
								sidenote={deque().sidenote}
							/>
						</Show>
					</Suspense>

					{/* deque cards */}
					<Suspense fallback={<LoadingBar />}>
						<Show when={cards()}>
							<For each={cards()}>
								{(card: CardT, index) => {
									return (
										<Card
											card={card}
											index={index()}
											onClickAnswer={onClickAnswer}
										/>
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
								<CompletedCards
									doneCount={cardsDone()}
									total={cards().length}
								/>
							</Show>
						</Suspense>

						<Timer seconds={seconds()} />

						<div class='mt-8'>
							<DequeActionButton
								styles={['bg-success', 'hover:bg-white']}
								text='Submit Deque'
								onClick={() => {
									submitDeque(answers);
								}}
							/>
							{/* <label for='my-modal' class='hover:font-bold bg-success hover:bg-white'>
								open modal
							</label> */}
							<Link href='/deques'>
								<DequeActionButton
									styles={['hover:bg-black', 'text-white', 'bg-error']}
									text='Quit Deque'
									onClick={console.log}
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Deque;
