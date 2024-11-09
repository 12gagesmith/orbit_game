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
  const player1 = "white"
  const player2 = "blue"
  const [currPlayer, setCurrPlayer] = useState(player1);

  const [squares, setSquares] = useState(["slot_down_empty.png", "slot_left_empty.png", "slot_left_empty.png", "slot_left_empty.png", "slot_down_empty.png", "slot_down_empty.png", "slot_left_empty.png", "slot_up_empty.png", "slot_down_empty.png", "slot_right_empty.png", "slot_up_empty.png", "slot_up_empty.png", "slot_right_empty.png", "slot_right_empty.png", "slot_right_empty.png", "slot_up_empty.png"]);
  const [whiteIsNext, setWhiteIsNext] = useState(true);

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner + "!";
  } else if (checkTie(squares)) {
    status = "Tie Game"
  } else {
    status = "It's " + currPlayer + "'s turn."
  }

  function orbit(currSquares) {
    const temp1 = currSquares[0]
    const temp2 = currSquares[5]
    if (currSquares[1] == "slot_left_white.png") {
      currSquares[0] = "slot_down_white.png"
    } else if (currSquares[1] == "slot_left_blue.png") {
      currSquares[0] = "slot_down_blue.png"
    } else {
      currSquares[0] = "slot_down_empty.png"
    }
    if (currSquares[2] == "slot_left_white.png") {
      currSquares[1] = "slot_left_white.png"
    } else if (currSquares[2] == "slot_left_blue.png") {
      currSquares[1] = "slot_left_blue.png"
    } else {
      currSquares[1] = "slot_left_empty.png"
    }
    if (currSquares[3] == "slot_left_white.png") {
      currSquares[2] = "slot_left_white.png"
    } else if (currSquares[3] == "slot_left_blue.png") {
      currSquares[2] = "slot_left_blue.png"
    } else {
      currSquares[2] = "slot_left_empty.png"
    }
    if (currSquares[7] == "slot_up_white.png") {
      currSquares[3] = "slot_left_white.png"
    } else if (currSquares[7] == "slot_up_blue.png") {
      currSquares[3] = "slot_left_blue.png"
    } else {
      currSquares[3] = "slot_left_empty.png"
    }
    if (currSquares[11] == "slot_up_white.png") {
      currSquares[7] = "slot_up_white.png"
    } else if (currSquares[11] == "slot_up_blue.png") {
      currSquares[7] = "slot_up_blue.png"
    } else {
      currSquares[7] = "slot_up_empty.png"
    }
    if (currSquares[15] == "slot_up_white.png") {
      currSquares[11] = "slot_up_white.png"
    } else if (currSquares[15] == "slot_up_blue.png") {
      currSquares[11] = "slot_up_blue.png"
    } else {
      currSquares[11] = "slot_up_empty.png"
    }
    if (currSquares[14] == "slot_right_white.png") {
      currSquares[15] = "slot_up_white.png"
    } else if (currSquares[14] == "slot_right_blue.png") {
      currSquares[15] = "slot_up_blue.png"
    } else {
      currSquares[15] = "slot_up_empty.png"
    }
    if (currSquares[13] == "slot_right_white.png") {
      currSquares[14] = "slot_right_white.png"
    } else if (currSquares[13] == "slot_right_blue.png") {
      currSquares[14] = "slot_right_blue.png"
    } else {
      currSquares[14] = "slot_right_empty.png"
    }
    if (currSquares[12] == "slot_right_white.png") {
      currSquares[13] = "slot_right_white.png"
    } else if (currSquares[12] == "slot_right_blue.png") {
      currSquares[13] = "slot_right_blue.png"
    } else {
      currSquares[13] = "slot_right_empty.png"
    }
    if (currSquares[8] == "slot_down_white.png") {
      currSquares[12] = "slot_right_white.png"
    } else if (currSquares[8] == "slot_down_blue.png") {
      currSquares[12] = "slot_right_blue.png"
    } else {
      currSquares[12] = "slot_right_empty.png"
    }
    if (currSquares[4] == "slot_down_white.png") {
      currSquares[8] = "slot_down_white.png"
    } else if (currSquares[4] == "slot_down_blue.png") {
      currSquares[8] = "slot_down_blue.png"
    } else {
      currSquares[8] = "slot_down_empty.png"
    }
    if (temp1 == "slot_down_white.png") {
      currSquares[4] = "slot_down_white.png"
    } else if (temp1 == "slot_down_blue.png") {
      currSquares[4] = "slot_down_blue.png"
    } else {
      currSquares[4] = "slot_down_empty.png"
    }
    if (currSquares[6] == "slot_left_white.png") {
      currSquares[5] = "slot_down_white.png"
    } else if (currSquares[6] == "slot_left_blue.png") {
      currSquares[5] = "slot_down_blue.png"
    } else {
      currSquares[5] = "slot_down_empty.png"
    }
    if (currSquares[10] == "slot_up_white.png") {
      currSquares[6] = "slot_left_white.png"
    } else if (currSquares[10] == "slot_up_blue.png") {
      currSquares[6] = "slot_left_blue.png"
    } else {
      currSquares[6] = "slot_left_empty.png"
    }
    if (currSquares[9] == "slot_right_white.png") {
      currSquares[10] = "slot_up_white.png"
    } else if (currSquares[9] == "slot_right_blue.png") {
      currSquares[10] = "slot_up_blue.png"
    } else {
      currSquares[10] = "slot_up_empty.png"
    }
    if (temp2 == "slot_down_white.png") {
      currSquares[9] = "slot_right_white.png"
    } else if (temp2 == "slot_down_blue.png") {
      currSquares[9] = "slot_right_blue.png"
    } else {
      currSquares[9] = "slot_right_empty.png"
    }
    return currSquares;
  }
  
  function handleSquareClick(i) {
    const nextSquares = squares.slice();
    if (calculateWinner(nextSquares)) {
      return;
    }
    if (nextSquares[i].split("_")[2] == "empty.png") {
      if (i == 0 || i == 4 || i == 5 || i == 8) {
        if (whiteIsNext) {
          nextSquares[i] = "slot_down_white.png";
        } else {
          nextSquares[i] = "slot_down_blue.png";
        }
      } else if (i == 1 || i == 2 || i == 3 || i == 6) {
        if (whiteIsNext) {
          nextSquares[i] = "slot_left_white.png";
        } else {
          nextSquares[i] = "slot_left_blue.png";
        }
      } else if (i == 7 || i == 10 || i == 11 || i == 15) {
        if (whiteIsNext) {
          nextSquares[i] = "slot_up_white.png";
        } else {
          nextSquares[i] = "slot_up_blue.png";
        }
      } else {
        if (whiteIsNext) {
          nextSquares[i] = "slot_right_white.png";
        } else {
          nextSquares[i] = "slot_right_blue.png";
        }
      }
      setSquares(orbit(nextSquares))
      setWhiteIsNext(!whiteIsNext)
      if (whiteIsNext) {
        setCurrPlayer(player2)
      } else {
        setCurrPlayer(player1)
      }
    }
  }

  function handlePlayAgain() {
    setSquares(["slot_down_empty.png", "slot_left_empty.png", "slot_left_empty.png", "slot_left_empty.png", "slot_down_empty.png", "slot_down_empty.png", "slot_left_empty.png", "slot_up_empty.png", "slot_down_empty.png", "slot_right_empty.png", "slot_up_empty.png", "slot_up_empty.png", "slot_right_empty.png", "slot_right_empty.png", "slot_right_empty.png", "slot_up_empty.png"])
    setCurrPlayer(player1)
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
        <label>{status}</label>
      </div>
      <br />
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
        <button class="normal" onClick={handlePlayAgain}>Play Again</button>
      </div>
      <br />
    </main>
  );
}

function checkTie(squares) {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].split("_")[2] == "empty.png") {
      return null;
    }
  }
  return true;
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [0, 5, 10, 15],
    [3, 6, 9, 12]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c, d] = lines[i];
    if (squares[a].split("_")[2] && squares[a].split("_")[2] === squares[b].split("_")[2] && squares[a].split("_")[2] === squares[c].split("_")[2] && squares[a].split("_")[2] === squares[d].split("_")[2]) {
      if (squares[a].split("_")[2] != "empty.png") {
        return squares[a].split("_")[2].split(".")[0];
      }
    }
  }
  return null;
}