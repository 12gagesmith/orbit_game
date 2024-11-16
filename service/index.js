const express = require('express');
const uuid = require('uuid');
const app = express();

// Create memory data structures
let users = {};
let scores = [];

const port = process.argv.length > 2 ? process.argv[2] : 3000;

// Parse JSON
app.use(express.json());

// Serving the frontend static file
app.use(express.static('public'));

// Router path for endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
    const user = users[req.body.email];
    if (user) {
        res.status(409).send({ msg: 'Existing user' });
    } else {
        const user = { email: req.body.email, password: req.body.password, token: uuid.v4() };
        users[user.email] = user;

        res.send({ token: user.token });
    }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
    const user = users[req.body.email];
    if (user) {
        if (req.body.password === user.password) {
        user.token = uuid.v4();
        res.send({ token: user.token });
        return;
        }
    }
    res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', (req, res) => {
    const user = Object.values(users).find((u) => u.token === req.body.token);
    if (user) {
        delete user.token;
    }
    res.status(204).end();
});

// GetScores
apiRouter.get('/scores', (_req, res) => {
    res.send(scores);
});

// SubmitScore
apiRouter.post('/score', (req, res) => {
    scores = updateScores(req.body, scores);
    res.send(scores);
});

// updateScores considers a new score for inclusion in the high scores.
function updateScores(newScore, scores) {
    let found = false;
    for (const [i, prevScore] of scores.entries()) {
        if (newScore.score > prevScore.score) {
        scores.splice(i, 0, newScore);
        found = true;
        break;
        }
    }

    if (!found) {
        scores.push(newScore);
    }

    if (scores.length > 10) {
        scores.length = 10;
    }

    return scores;
}
