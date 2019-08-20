const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');

const boards = require('./controllers/boards');

const app = express();

app.use(json());
app.use(cors());

// Boards
app.get('/api/boards', boards.getBoards);
app.post('/api/boards/:id', boards.addBoard);
app.put('/api/boards/:id', boards.editBoard);
app.delete('/api/boards/:id', boards.deleteBoard);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening @ port: ${port}`);
});
