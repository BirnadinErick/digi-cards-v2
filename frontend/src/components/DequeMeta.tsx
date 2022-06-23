import { Component } from 'solid-js';

const DequeMeta: Component = () => {
	return (
		<div
			class='hero md:h-auto mb-8 rounded-lg'
			style='background-image: url(https://api.lorem.space/image/game?w=1280&h=720);'
		>
			<div class='hero-overlay bg-opacity-60'></div>
			<div class='hero-content text-center text-neutral-content'>
				<div class='max-w-md py-8'>
					<h1 class='mb-5 text-5xl font-bold text-white'>Hello there</h1>
					<p class='mb-5 text-white backdrop-blur-xl  rounded-lg p-4'>
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi.
					</p>

					<button class='btn gap-2'>
						Category
						<div class='badge badge-primary'>Mathematics</div>
					</button>

					<div class='stats bg-secondary text-primary-content mt-4'>
						<div class='stat'>
							<div class='font-mono font-bold text-black'>created by</div>
							<div class='stat-value'>Birnadin E.</div>
							<div class='stat-actions'>
								<button class='btn btn-sm btn-accent'>Give Respect 💖</button>
							</div>
						</div>

						<div class='stat'>
							<div class='text-black font-mono font-bold'>deque master</div>
							<div class='stat-value'>Birnadin E.</div>
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
