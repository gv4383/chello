const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');

const boards = require('./controllers/boards');

const app = express();

app.use(json());
app.use(cors());

app.get('/api/boards', boards.getTest);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening @ port: ${port}`);
});
