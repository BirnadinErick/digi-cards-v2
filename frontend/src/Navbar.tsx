import { Component } from 'solid-js';
import UserAvatar from './components/UserAvatar';

const Navbar: Component = () => {
	return (
		<div class='navbar bg-base-300'>
			<div class='flex-1'>
				<a class='btn btn-ghost normal-case text-xl font-prata'>Digi-Cards</a>
			</div>
			<div class='flex-none gap-4'>
				<div class='form-control'>
					<input
						type='text'
						placeholder='Search'
						class='input input-bordered invisible md:visible'
					/>
				</div>
				<div class='dropdown dropdown-end mr-2'>
					<label tabindex='0' class='btn btn-ghost btn-circle avatar'>
						{/* <div class="w-10 rounded-full">
                        <img src="https://api.lorem.space/image/pizza?hash=33791" />
                    </div> */}
						<UserAvatar w={10} m={0} />
					</label>
					<ul
						tabindex='0'
						class='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'
					>
						<li>
							<a class='justify-between'>Profile</a>
						</li>
						<li>
							<a>Settings</a>
						</li>
						<li>
							<a>Logout</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;