import { Component } from 'solid-js';

const ComingSoonBanner: Component = () => {
	return (
		<div class='m-16 rounded-xl bg-white dark:bg-black cursor-default p-16 dark:text-white text-black'>
			<h1 class='font-prata text-6xl uppercase'>Feature Coming Soon</h1>
			<h3 class='font-noto text-xl mt-8 mb-2'>
				Subscribe to our waiting list to get notified as soon as new features
				hit
			</h3>

			<label for='my-modal-6' class='btn modal-button btn-primary mt-2 mb-0'>
				Subscribe
			</label>
			<input type='checkbox' id='my-modal-6' class='modal-toggle' />
			<div class='modal modal-bottom sm:modal-middle'>
				<div class='modal-box'>
					<h3 class='font-prata text-md'>Hey There 👋, This is Birnadin E.</h3>
					<p class='py-4 font-noto font-thin'>
						Thanks for subscribing and kuudos for your keen in my work. I will
						definitely let you know as soon as I am done developing this
						feature.
					</p>
					<div class='modal-action'>
						<label for='my-modal-6' class='btn font-mono'>
							Got it, buddy 👍
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ComingSoonBanner;
