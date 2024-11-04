import React from 'react';
import './play.css'

export function Play() {
  return (
    <main className='container-fluid bg-secondary text-center'>
      <br />
      <div class="players">
        Players:
        <span class="player-name">Mystery player 1, Mystery player 2</span>
      </div>

      <br />

      <div>
        <label>It's Mystery player 1's turn.</label>
      </div>

      <br />
      <div>
        Move your opponent's piece or <button class="normal">Skip</button>
      </div>
      <br />

      <div>
        <table>
          <tr>
            <td>
              <button>
                <img src="public/slot_down_empty.png"></img>
              </button>
            </td>
            <td>
              <button>
                <img src="public/slot_left_empty.png"></img>
              </button>
            </td>
            <td>
              <button>
                <img src="public/slot_left_empty.png"></img>
              </button>
            </td>
            <td>
              <button>
                <img src="public/slot_left_empty.png"></img>
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button>
                <img src="public/slot_down_empty.png"></img>
              </button>
            </td>
            <td>
              <button>
                <img src="public/slot_down_empty.png"></img>
              </button>
            </td>
            <td>
              <button>
                <img src="public/slot_left_empty.png"></img>
              </button>
            </td>
            <td>
              <button>
                <img src="public/slot_up_empty.png"></img>
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button>
                <img src="public/slot_down_empty.png"></img>
              </button>
            </td>
            <td>
              <button>
                <img src="public/slot_right_empty.png"></img>
              </button>
            </td>
            <td>
              <button>
                <img src="public/slot_up_empty.png"></img>
              </button>
            </td>
            <td>
              <button>
                <img src="public/slot_up_empty.png"></img>
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button>
                <img src="public/slot_right_empty.png"></img>
              </button>
            </td>
            <td>
              <button>
                <img src="public/slot_right_empty.png"></img>
              </button>
            </td>
            <td>
              <button>
                <img src="public/slot_right_empty.png"></img>
              </button>
            </td>
            <td>
              <button>
                <img src="public/slot_up_empty.png"></img>
              </button>
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