import { Component, createSignal } from 'solid-js';

const [answer, setAnswer] = createSignal(-1);
const [seconds, setSeconds] = createSignal(2);

function onClickAnswer(id: number) {
	setAnswer(id);
}

const Deques: Component = () => {
	// ! uncomment after ui design for coutdown functionality
	// setInterval(() => {
	// 	setSeconds(seconds() - 1);
	// }, 1000);

	return (
		<div class='flex justify-between'>
			<div class='mx-8 my-2 bg-base-300 p-8 w-3/5 rounded-lg'>
				<img
					src={
						'https://unsplash.com/photos/PkiHF-EeT6o/download?ixid=MnwxMjA3fDB8MXxhbGx8M3x8fHx8fDJ8fDE2NTQ0MjUwMjM&force=true&w=640'
					}
					alt='card-image'
				/>

				<p class='mt-8 mb-4 cursor-default font-prata text-lg'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste
					architecto officia sint rerum
				</p>

				<p class='cursor-default font-mono'>
					You chose:
					{answer() === -1 ? 'Nothing, Please choose an answer!' : answer()}
				</p>

				<div
					class='my-4 p-4 bg-secondary rounded-lg hover:bg-primary cursor-pointer'
					onClick={() => {
						onClickAnswer(1);
					}}
				>
					<p class='text-justify text-black text-md font-sans'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
						recusandae officiis minima pariatur corporis
					</p>
				</div>

				<div
					class='my-4 p-4 bg-secondary rounded-lg hover:bg-primary cursor-pointer'
					onClick={() => {
						onClickAnswer(2);
					}}
				>
					<p class='text-justify text-black text-md font-sans'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
						recusandae officiis minima pariatur corporis
					</p>
				</div>
				<div
					class='my-4 p-4 bg-secondary rounded-lg hover:bg-primary cursor-pointer'
					onClick={() => {
						onClickAnswer(3);
					}}
				>
					<p class='text-justify text-black text-md font-sans'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
						recusandae officiis minima pariatur corporis
					</p>
				</div>
				<div
					class='my-4 p-4 bg-secondary rounded-lg hover:bg-primary cursor-pointer'
					onClick={() => {
						onClickAnswer(4);
					}}
				>
					<p class='text-justify text-black text-md font-sans'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
						recusandae officiis minima pariatur corporis
					</p>
				</div>
				<div
					class='my-4 p-4 bg-secondary rounded-lg hover:bg-primary cursor-pointer'
					onClick={() => {
						onClickAnswer(5);
					}}
				>
					<p class='text-justify text-black text-md font-sans'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
						recusandae officiis minima pariatur corporis
					</p>
				</div>
			</div>
			<div class='mx-8 my-2 w-2/5'>
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
				<div class='mt-2 bg-base-300  rounded-lg p-8 cursor-default'>
					<div class='bg-white rounded-md p-4'>
						<p class='font-bold font-serif font-2xl text-center text-black'>
							2 of 7 Cards Answered
						</p>
					</div>

					<div>
						<p>{new Date(seconds() * 1000).toISOString().substring(11, 19)}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Deques;
