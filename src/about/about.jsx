import React from 'react';
import './about.css'

export function About() {
  return (
    <main className='container-fluid bg-secondary text-center'>
      <p>
        Orbit Game, based on Orbito, is a game where you try to get four marbles of your color in a
        horizontal, vertical or diagonal row on a shifting game board. But watch out! At the end of
        your turn, ALL marbles shift 1 position on their orbit! Moreover, you can also disrupt your
        opponent's strategy by moving one of their marbles on your turn.
      </p>

      <p>
        <a href="https://flexiqgames.com/en/product/orbito/">For more information, here is the main webpage of Orbito</a>
      </p>

      <img src="https://target.scene7.com/is/image/Target/GUEST_4f57545d-9fa7-4ca4-b048-99b1e89becb7" alt="Orbito"></img>

      <p>
        The name Orbito is a registered trademark of FlexIQ Games. My use of the name and the game is for non-profit
        educational use only. No part of this code or program should be used outside of that definition.
      </p>
    </main>
  );
}