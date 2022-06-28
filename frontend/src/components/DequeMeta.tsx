import { Component } from 'solid-js';

const DequeMeta: Component<{
	title: string;
	sidenote: string;
	category: string;
	created_by: string;
	deque_master: string;
}> = (props) => {
	return (
		<div
			class='hero md:h-auto mb-8 rounded-lg'
			style='background-image: url(https://api.lorem.space/image/game?w=1280&h=720);'
		>
			<div class='hero-overlay bg-opacity-60'></div>
			<div class='hero-content text-center text-neutral-content'>
				<div class='max-w-md py-8'>
					<h1 class='mb-5 text-5xl font-bold text-white'>{props.title}</h1>
					<p class='mb-5 text-white backdrop-blur-xl  rounded-lg p-4'>
						{props.sidenote}
					</p>

					<button class='btn gap-2'>
						Category
						<div class='badge badge-primary'>{props.category}</div>
					</button>

					<div class='stats bg-secondary text-primary-content mt-4'>
						<div class='stat'>
							<div class='font-mono font-bold text-black'>created by</div>
							<div class='stat-value'>{props.created_by}</div>
							<div class='stat-actions'>
								<button class='btn btn-sm btn-accent'>Give Respect 💖</button>
							</div>
						</div>

						<div class='stat'>
							<div class='text-black font-mono font-bold'>deque master</div>
							<div class='stat-value'>
								{props.deque_master === null ||
								props.deque_master === '' ||
								props.deque_master === undefined
									? 'N/A'
									: props.deque_master}
							</div>
							<div class='stat-actions'>
								<button class='btn btn-sm'>Give Respect 💖</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DequeMeta;
