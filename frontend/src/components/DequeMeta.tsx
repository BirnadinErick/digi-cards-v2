import { Component } from 'solid-js';

const DequeMeta: Component = () => {
	return (
		<div class='mb-2 bg-base-300 rounded-lg p-8 cursor-default'>
			<h1 class='text-2xl uppercase text-accent font-serif'>Deque info</h1>

			<div class='py-4'>
				<h3 class='my-2 font-mono text-primary hover:underline'>
					by: <a href='#'>Birnadin E.</a>
				</h3>
				<h3 class='my-2 font-mono text-secondary'>category: mathematics</h3>
				<h3 class='my-2 font-mono text-error font-bold'>sidenote: lorem</h3>
				<h3 class='my-2 font-mono text-info'>
					deque master:
					<a href='#' class='text-bold hover:underline'>
						Birnadin E.
					</a>
				</h3>
			</div>
		</div>
	);
};

export default DequeMeta;
