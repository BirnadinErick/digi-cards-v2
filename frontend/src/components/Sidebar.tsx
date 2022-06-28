import { Component } from 'solid-js';
import { Link } from 'solid-app-router';

const Sidebar: Component = () => {
	return (
		<div class='w-64 h-screen bg-base-300'>
			<Link href='/'>
				<div class='sidebar-item'>🏠 Home</div>
			</Link>
			<Link href='my-profile'>
				<div class='sidebar-item'>🔮 My Profile</div>
			</Link>
			<Link href='/my-team'>
				<div class='sidebar-item'>🧑‍🤝‍🧑 My Team</div>
			</Link>

			<div class='divider'></div>
			<Link href='/deques'>
				<div class='sidebar-item'>🃏 Deques</div>
			</Link>
			<Link href='/todos'>
				<div class='sidebar-item'>✅ To-Dos</div>
			</Link>
			<Link href='/starred'>
				<div class='sidebar-item'>🌟 Starred Deques</div>
			</Link>
			<div class='divider'></div>
		</div>
	);
};

export default Sidebar;
