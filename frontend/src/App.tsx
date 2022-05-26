import { Component, lazy } from 'solid-js';
import { Routes, Route } from "solid-app-router"

import  Navbar from "./Navbar";
import Sidebar from "./Sidbar";


const App: Component = () => {
  

  return (
    <>
      <Navbar />
      <div class="flex justify-start">
        <Sidebar />
      <div class='p-2 w-screen bg-base-200'>
          <Routes>
            <Route path='/' element={<h1>Home</h1>} />
            <Route path='/my-profile' element={<h1>My Profile</h1>} />
            <Route path='/my-team' element={<h1>My Team</h1>} />
            <Route path='/deques' element={<h1>Deques</h1>} />
            <Route path='/todos' element={<h1>To-Dos</h1>} />
            <Route path='/starred' element={<h1>Starred Deques</h1>} />
        </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
