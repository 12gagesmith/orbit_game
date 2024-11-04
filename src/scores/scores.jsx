import React from 'react';
import './scores.css'

export function Scores() {
  return (
    <main className='container-fluid bg-secondary text-center'>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Wins</th>
            <th>Streak</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Gage Smith</td>
            <td>34</td>
            <td>6</td>
          </tr>
          <tr>
            <td>2</td>
            <td>James Nielsen</td>
            <td>29</td>
            <td>4</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Roger Clark</td>
            <td>7</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}