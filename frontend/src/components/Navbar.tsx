import { Link } from 'solid-app-router';
import { Component } from 'solid-js';
import UserAvatar from './UserAvatar';

const Navbar: Component = () => {
	return (
		<div class='navbar bg-base-300'>
			<div class='flex-1'>
				<Link href='/'>
					<a class='btn btn-ghost normal-case text-xl font-prata'>Digi-Cards</a>
				</Link>
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
						<UserAvatar
							w={10}
							m={0}
							src={'https://api.lorem.space/image/car'}
						/>
					</label>
					<ul
						tabindex='0'
						class='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'
					>
						<li>
							<Link href='/my-profile'>
								<a class='justify-between'>Profile</a>
							</Link>
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
