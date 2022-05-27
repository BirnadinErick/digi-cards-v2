import { Component, lazy } from 'solid-js';
import { Routes, Route } from 'solid-app-router';

// ? Pages import
const Home = lazy(() => import('./pages/Home'));
const MyProfile = lazy(() => import('./pages/My-Profile'));
const MyTeam = lazy(() => import('./pages/My-Team'));
const Deques = lazy(() => import('./pages/Deques'));
const ToDos = lazy(() => import('./pages/To-Dos'));
const Starred = lazy(() => import('./pages/Starred'));
// ? Components import
import Navbar from './Navbar';
import Sidebar from './Sidbar';

const App: Component = () => {
	return (
		<>
			<Navbar />
			<div class='flex justify-start'>
				<Sidebar />
				<div class='p-2 w-screen bg-base-200'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/my-profile' element={<MyProfile />} />
						<Route path='/my-team' element={<MyTeam />} />
						<Route path='/deques' element={<Deques />} />
						<Route path='/todos' element={<ToDos />} />
						<Route path='/starred' element={<Starred />} />
					</Routes>
				</div>
			</div>
		</>
	);
};

export default App;
