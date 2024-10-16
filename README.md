# Orbit Game
## Specification Deliverable
### Elevator Pitch
Ever want to play a fun simple game with your friends, but you're bored of all the ones you know? This is a game based on Orbito, which is a two-player board game similar to connect 4 or tic-tac-toe. The board is a 4x4 grid on which each person takes turns adding a marble of their color to a space on the board. The catch is that between each turn the marbles will move one space counterclockwise around the grid, so you will need to plan ahead of where the marbles will move to take victory. Will you go straight to trying for 4 in a row, or will you try to block your opponent? Grab a friend and have fun with this new innovative game!
### Design
![Orbito](https://target.scene7.com/is/image/Target/GUEST_4f57545d-9fa7-4ca4-b048-99b1e89becb7)
This is a picture of the actual board game that I will be making digitally as my startup
### Key features
- Simple instructions on how to play
- An interactive board to play the game
- Ability to start a new game when a game ends
- A link to more detailed rules
### Technologies
I am going to use the required technologies in the following ways:
- **HTML** - Used to structure and organize my application
- **CSS** - Used to make my game look nice and pretty
- **JavaScript** - Used to make the game function on the backend
- **React** - Used to help the game function (I've never used React before idk what its purpose is)
- **Web Service** - Backend service with endpoints for:
  - Linking to more detailed rules
  - Probably something cool I've yet to learn about
- **DB/Login** - Used to register people and keep track of how many wins/losses someone has
- **WebSocket** - Used to connect with other players (I don't know how WebSocket works either)

## HTML deliverable
For this deliverable I built out the structure of my application using HTML.

- [x] **HTML pages** - Four HTML pages that represent the login page, the play page, the leaderboard page, and the about page.
- [x] **Links** - All the pages link to each other. Also, the about page has a link to the website of the game I am basing my startup on.
- [x] **Text** - Text is inserted to provide instruction and guidance to the user.
- [x] **Images** - I added an image on the about page to show what the board game looks like.
- [x] **DB/Login** - There is a place to both login and create an account.
- [x] **WebSocket** - The leaderboard as it is now represents how it will look when it updates in real time. (Also if I can figure it out, multiplayer between two different systems.)

## CSS deliverable
For this deliverable I properly styled the application into its (near) final appearance.

- [x] **Header, footer, and main content body** - Yep, they're there.
- [x] **Navigation elements** - I removed the bullet points and have them appear in a row.
- [x] **Responsive to window resizing** - The app displays well on both my computer and my phone.
- [x] **Application elements** - Used good contrast and whitespace
- [x] **Application text content** - Used the same font for all text
- [x] **Application images** - I used images I made in Canva to create the game board.