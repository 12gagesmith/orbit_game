import React from 'react';
import './app.css';

export default function App() {
  return (
    <div className='body'>
      <header>
        <h1>Orbit Game</h1>
        <nav>
          <menu>
            <a href="index.html">Home</a>
            <a href="play.html">Play</a>
            <a href="scores.html">Leaderboard</a>
            <a href="about.html">About</a>
          </menu>
        </nav>
      </header>

      <main>App components go here</main>

      <footer>
        <span>Made by Gage Smith</span>
        <br />
        <a href="https://github.com/12gagesmith/orbit_game">GitHub Repository</a>
      </footer>
    </div>
  )
}