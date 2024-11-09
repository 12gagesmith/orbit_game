import React from 'react';
import { useState } from 'react';
import './play.css'

function Square({value, onSquareClick}) {
  return (
    <button className="square" onClick={onSquareClick}>
      <img src={value}></img>
    </button>
  );
}

export function Play() {
  const player1 = "Mystery player 1"
  const player2 = "Mystery player 2"
  const currPlayer = player1

  const [squares, setSquares] = useState(["public/slot_down_empty.png", "public/slot_left_empty.png", "public/slot_left_empty.png", "public/slot_left_empty.png", "public/slot_down_empty.png", "public/slot_down_empty.png", "public/slot_left_empty.png", "public/slot_up_empty.png", "public/slot_down_empty.png", "public/slot_right_empty.png", "public/slot_up_empty.png", "public/slot_up_empty.png", "public/slot_right_empty.png", "public/slot_right_empty.png", "public/slot_right_empty.png", "public/slot_up_empty.png"]);
  const [whiteIsNext, setWhiteIsNext] = useState(true);
  
  function handleSquareClick(i) {
    const nextSquares = squares.slice();
    if (i == 0 || i == 4 || i == 5 || i == 8) {
      if (whiteIsNext) {
        nextSquares[i] = "public/slot_down_white.png";
      } else {
        nextSquares[i] = "public/slot_down_blue.png";
      }
    } else if (i == 1 || i == 2 || i == 3 || i == 6) {
      if (whiteIsNext) {
        nextSquares[i] = "public/slot_left_white.png";
      } else {
        nextSquares[i] = "public/slot_left_blue.png";
      }
    } else if (i == 7 || i == 10 || i == 11 || i == 15) {
      if (whiteIsNext) {
        nextSquares[i] = "public/slot_up_white.png";
      } else {
        nextSquares[i] = "public/slot_up_blue.png";
      }
    } else {
      if (whiteIsNext) {
        nextSquares[i] = "public/slot_right_white.png";
      } else {
        nextSquares[i] = "public/slot_right_blue.png";
      }
    }
    setSquares(nextSquares)
    setWhiteIsNext(!whiteIsNext)
  }

  return (
    <main className='container-fluid bg-secondary text-center'>
      <br />
      <div className="players">
        Players:
        <span className="player-name"> {player1}, {player2}</span>
      </div>
      <br />
      <div>
        <label>It's {currPlayer}'s turn.</label>
      </div>
      <br />
      <div>
        Move your opponent's piece or <button className="normal">Skip</button>
      </div>
      <br />
      <div>
        <table>
          <tr>
            <td className="slot">
              <Square value={squares[0]} onSquareClick={() => handleSquareClick(0)} />
            </td>
            <td className="slot">
              <Square value={squares[1]} onSquareClick={() => handleSquareClick(1)} />
            </td>
            <td className="slot">
              <Square value={squares[2]} onSquareClick={() => handleSquareClick(2)} />
            </td>
            <td className="slot">
              <Square value={squares[3]} onSquareClick={() => handleSquareClick(3)} />
            </td>
          </tr>
          <tr>
            <td className="slot">
              <Square value={squares[4]} onSquareClick={() => handleSquareClick(4)} />
            </td>
            <td className="slot">
              <Square value={squares[5]} onSquareClick={() => handleSquareClick(5)} />
            </td>
            <td className="slot">
              <Square value={squares[6]} onSquareClick={() => handleSquareClick(6)} />
            </td>
            <td className="slot">
              <Square value={squares[7]} onSquareClick={() => handleSquareClick(7)} />
            </td>
          </tr>
          <tr>
            <td className="slot">
              <Square value={squares[8]} onSquareClick={() => handleSquareClick(8)} />
            </td>
            <td className="slot">
              <Square value={squares[9]} onSquareClick={() => handleSquareClick(9)} />
            </td>
            <td className="slot">
              <Square value={squares[10]} onSquareClick={() => handleSquareClick(10)} />
            </td>
            <td className="slot">
              <Square value={squares[11]} onSquareClick={() => handleSquareClick(11)} />
            </td>
          </tr>
          <tr>
            <td className="slot">
              <Square value={squares[12]} onSquareClick={() => handleSquareClick(12)} />
            </td>
            <td className="slot">
              <Square value={squares[13]} onSquareClick={() => handleSquareClick(13)} />
            </td>
            <td className="slot">
              <Square value={squares[14]} onSquareClick={() => handleSquareClick(14)} />
            </td>
            <td className="slot">
              <Square value={squares[15]} onSquareClick={() => handleSquareClick(15)} />
            </td>
          </tr>
        </table>
      </div>
      <br />
      <div>
        <button class="normal">Play Again</button>
      </div>
      <br />
    </main>
  );
}