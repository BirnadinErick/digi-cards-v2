import { Component, createResource, For, Show, Suspense } from 'solid-js';
import { Link } from 'solid-app-router';
import type { DequeT } from '../utils/types';
import getDeques from '../utils/getDeques';
import LoadingBar from '../components/LoadingBar';

const Deques: Component = () => {
	const [deques] = createResource(getDeques);

	return (
		<>
			<div class='mt-4 ml-4 mr-8 mb-4 invisible md:visible'>
				<div class='bg-base-300 h-64 rounded-xl mb-4 p-8 '>
					<h1 class='text-4xl font-prata mb-4 text-black dark:text-white underline'>
						Hey There 👋
					</h1>
					<h3 class='text-xl font-sans italic text-secondary my-4'>
						Let's get our hands dirty with learning
					</h3>

					<p class='font-noto text-md text-accent'>
						Choose a deque and try to finish it within time limit. First one to
						finish in global range to claim{' '}
						<span class='italic font-bold font-mono text-black dark:text-white'>
							first-blood
						</span>{' '}
						and finish somehow 😅 to get{' '}
						<span class='italic font-bold font-mono text-black dark:text-white'>
							deque-master
						</span>{' '}
						achievements
					</p>

					<div class='my-8'>
						<div class='mr-4 btn btn-primary hover:scale-105 transition duration-200 ease-out'>
							<Link href='/my-profile'>Global Leaderboard 📈</Link>
						</div>
						<div class='mr-4 btn btn-secondary hover:scale-105 transition duration-200 ease-out'>
							<Link href='/my-profile'>Your Achievements 🎓</Link>
						</div>
						<div class='btn btn-accent hover:scale-105 transition duration-200 ease-out'>
							<Link href='/todos'>Pinned Deques 📌</Link>
						</div>
					</div>
				</div>
			</div>

			<section class='overflow-hidden'>
				<div class='container py-2 lg:pt-12 lg:px-32'>
					<div class='flex flex-wrap -m-1 md:-m-2'>
						<Suspense fallback={<LoadingBar />}>
							<Show when={deques()}>
								<For each={deques()}>
									{(deque: DequeT, index) => {
										return (
											<div class='card w-96 mr-4 mb-8 bg-white dark:bg-black shadow-xl cursor-default'>
												<figure>
													<img
														class='hover:scale-105 transition duration-300 ease-in-out'
														src='https://api.lorem.space/image/fashion'
														alt='Shoes'
													/>
												</figure>
												<div class='card-body'>
													<h2 class='card-title'>
														<span class='text-3xl'>{deque.title}</span>
														<Show
															when={index() % 2 === 0 ? true : false}
															fallback={''}
														>
															<div class='badge badge-accent'>Hot</div>
														</Show>
													</h2>

													<div class='card-actions justify-start'>
														<div class='badge badge-lg badge-primary'>
															Category: {deque.category}
														</div>
														<div class='badge badge-lg badge-secondary'>
															Difficulty: {deque.difficulty}
														</div>
													</div>
												</div>
												<div class='card-actions justify-start'>
													<Link
														href={`/deque/${deque.title
															.toLowerCase()
															.slice(0, 64)}?i=${deque.id}`}
													>
														<div class='btn btn-warning mb-4 ml-8 hover:scale-105 transition duration-200 ease-out hover:bg-white'>
															Play Deque
														</div>
													</Link>
												</div>
											</div>
										);
									}}
								</For>
							</Show>
						</Suspense>
					</div>
				</div>
			</section>
		</>
	);
};

export default Deques;
