import { Component } from 'solid-js';

const Stats: Component = () => {
	return (
		<div class='my-8 flex justify-center bg-accent p-8 rounded-xl'>
			<div class='stats stats-vertical lg:stats-horizontal shadow'>
				<div class='stat'>
					<div class='stat-figure text-primary'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							class='inline-block w-8 h-8 stroke-current'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
							></path>
						</svg>
					</div>
					<div class=' text-black dark:text-white font-mono'>Total Respect</div>
					<div class='stat-value text-primary'>25.6K</div>
					<div class='stat-desc'>You are killing it</div>
				</div>

				<div class='stat'>
					<div class='stat-figure text-secondary'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							class='inline-block w-8 h-8 stroke-current'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								d='M13 10V3L4 14h7v7l9-11h-7z'
							></path>
						</svg>
					</div>
					<div class='text-black dark:text-white font-mono'>Deque Masters</div>
					<div class='stat-value text-secondary'>26987452</div>
					<div class='stat-desc'>first 10 global spot</div>
				</div>

				<div class='stat'>
					<div class='stat-figure text-secondary'>
						<div class='avatar online'>
							<div class='w-16 rounded-full'>
								<img src='https://api.lorem.space/image/fashion?w=128&h=128' />
							</div>
						</div>
					</div>
					<div class='text-black dark:text-white font-mono'>Cards Done</div>
					<div class='stat-value text-success'>41</div>
					<div class='stat-desc text-secondary'>
						31 cards remaining for hacker
					</div>
				</div>
			</div>
		</div>
	);
};

export default Stats;
