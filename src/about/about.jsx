import React from 'react';
import './about.css'

export function About() {
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

  React.useEffect(() => {
    fetch('https://quote.cs260.click')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote);
        setQuoteAuthor(data.author);
      })
      .catch();
  }, []);

  return (
    <main className='container-fluid bg-secondary text-center'>
      <p>
        Orbit Game, based on Orbito, is a game where you try to get four marbles of your color in a
        horizontal, vertical or diagonal row on a shifting game board. Watch out! At the end of
        your turn, ALL marbles will shift 1 position on their orbit!
      </p>

      <p>
        <a href="https://flexiqgames.com/en/product/orbito/">For more information, here is the main webpage of Orbito</a>
      </p>

      <img src="https://target.scene7.com/is/image/Target/GUEST_4f57545d-9fa7-4ca4-b048-99b1e89becb7" alt="Orbito"></img>

      <p>
        The name Orbito is a registered trademark of FlexIQ Games. My use of the name and the game is for non-profit
        educational use only. No part of this code or program should be used outside of that definition.
      </p>

      <div className='quote_box'>
        <p className='quote'>"{quote}"</p>
        <p className='author'>- {quoteAuthor}</p>
      </div>
    </main>
  );
}