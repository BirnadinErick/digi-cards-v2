import { Component } from 'solid-js';
import DequeSVG from '../assets/deque_home_icon.svg';

const Stats: Component = () => {
	return (
		<div class='my-8 flex justify-center bg-accent p-8 rounded-xl'>
			<div class='stats stats-vertical lg:stats-horizontal shadow'>
				<div class='stat'>
					<div class='stat-figure text-primary'>
						{/* <svg
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
						</svg> */}
					</div>
					<div class=' text-black dark:text-white font-mono'>Total Respect</div>
					<div class='stat-value text-primary'>25.6K</div>
					<div class='stat-desc text-primary'>You are killing it 🔥</div>
				</div>

				<div class='stat'>
					<div class='stat-figure text-secondary'></div>
					<div class='text-black dark:text-white font-mono'>Deque Masters</div>
					<div class='stat-value text-secondary'>26987452</div>
					<div class='stat-desc text-secondary'>first 10 global spot</div>
				</div>

				<div class='stat'>
					<div class='stat-figure text-secondary'>
						{/* <div class='avatar online'>
							<div class='w-16 rounded-full'>
								<img src='https://api.lorem.space/image/fashion?w=128&h=128' />
							</div>
						</div> */}
					</div>
					<div class='text-black dark:text-white font-mono'>Deques Done</div>
					<div class='stat-value text-success'>41</div>
					<div class='stat-desc text-success'>
						31 deques remaining for hacker
					</div>
				</div>

				<div class='stat'>
					<div class='stat-figure text-secondary'>
						<div class='avatar'>
							<div class='w-16 rounded-full'>
								<img src='https://api.lorem.space/image/movie?w=128&h=128' />
							</div>
						</div>
					</div>
					<div class='text-black dark:text-white font-mono'>Rank</div>
					<div class='stat-value text-error'>Script Kiddie</div>
					<div class='stat-desc text-error'>
						Keep on goin', you can do it 👍
					</div>
				</div>
			</div>
		</div>
	);
};

export default Stats;
