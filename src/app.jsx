import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { About } from './about/about';
import './app.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className='body'>
        <header>
          <h1>Orbit Game</h1>
          <nav>
            <menu>
              <NavLink className='nav-link' to=''>Login</NavLink>
              <NavLink className='nav-link' to='play'>Play</NavLink>
              <NavLink className='nav-link' to='scores'>Leaderboard</NavLink>
              <NavLink className='nav-link' to='about'>About</NavLink>
            </menu>
          </nav>
        </header>

        <Routes>
          <Route path='/' element={<Login />} exact />
          <Route path='/play' element={<Play />} />
          <Route path='/scores' element={<Scores />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer>
          <span>Made by Gage Smith</span>
          <br />
          <a href="https://github.com/12gagesmith/orbit_game">GitHub Repository</a>
        </footer>
      </div>
    </BrowserRouter>
  )
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}