import React from 'react';

export function Login() {
  return (
    <main className='container-fluid bg-secondary text-center'>
      <h1>Welcome</h1>
      <form method="get" action="play.html">
        <div>
          <input type="text" placeholder="your@email.com" />
        </div>
        <div>
          <input type="password" placeholder="password" />
        </div>
        <button type="submit">Login</button>
        <button type="submit">Create</button>
      </form>
    </main>
  );
}