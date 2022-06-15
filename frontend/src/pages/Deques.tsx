import { Component, createSignal, For, lazy, Show } from 'solid-js';
import { Link } from 'solid-app-router';

import DequeThumb2 from '../assets/deque_thumb_2.jpg';
import DequeThumb1 from '../assets/deque_thumb_1.jpg';

const Deques: Component = () => {
	return (
		<>
			<div class='mt-4 ml-4 mr-8 mb-4 invisible md:visible'>
				<div class='bg-base-300 h-64 rounded-xl mb-4 p-8 '>
					<h1 class='text-4xl font-prata mb-4 text-white underline'>
						Hey There 👋
					</h1>
					<h3 class='text-xl font-sans italic text-secondary my-4'>
						Let's get our hands dirty with learning
					</h3>

					<p class='font-noto text-md text-accent'>
						Choose a deque and try to finish it within time limit. First one to
						finish in global range to claim{' '}
						<span class='italic font-bold font-mono text-white'>
							first-blood
						</span>{' '}
						and finish somehow 😅 to get{' '}
						<span class='italic font-bold font-mono text-white'>
							deque-master
						</span>{' '}
						achievements
					</p>

					<div class='my-8'>
						<div class='mr-4 btn btn-primary'>Global Leaderboard 📈</div>
						<div class='mr-4 btn btn-secondary'>Your Achievements 🎓</div>
						<div class='btn btn-accent'>Pinned Deques 📌</div>
					</div>
				</div>
			</div>
			<section class='overflow-hidden'>
				<div class='container py-2 lg:pt-12 lg:px-32'>
					<div class='flex flex-wrap -m-1 md:-m-2'>
						<For
							each={[
								1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4,

								1, 2, 3, 4,

								1, 2, 3, 4,
							]}
						>
							{(i) => {
								return (
									<div class='card w-96 mr-4 mb-8 bg-black shadow-xl cursor-default'>
										<figure>
											<img
												class='hover:scale-105 transition duration-300 ease-in-out'
												src={i % 2 === 0 ? DequeThumb1 : DequeThumb2}
												alt='Shoes'
											/>
										</figure>
										<div class='card-body'>
											<h2 class='card-title'>
												<span class='text-3xl'>Shoes! Shoes! Shoes! Shoes</span>
												<Show when={i % 2 === 0 ? true : false} fallback={''}>
													<div class='badge badge-accent'>Hot</div>
												</Show>
											</h2>

											<div class='card-actions justify-start'>
												<div class='badge badge-lg badge-primary'>
													Category: Fashion
												</div>
												<div class='badge badge-lg badge-secondary'>
													Difficulty: Hard
												</div>
											</div>
										</div>
										<div class='card-actions justify-start'>
											<Link href='/deque'>
												<div class='btn btn-warning mb-4 ml-8 hover:scale-105 transition duration-200 ease-out hover:bg-white'>
													Play Deque
												</div>
											</Link>
										</div>
									</div>
								);
							}}
						</For>
					</div>
				</div>
			</section>
		</>
	);
};

export default Deques;
