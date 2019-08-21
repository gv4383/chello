let boards = [
  {
    id: 1,
    name: 'Board 1',
    description: 'Description 1',
  },
  {
    id: 2,
    name: 'Board 2',
    description: 'Description 2',
  },
  {
    id: 3,
    name: 'Board 3',
    description: 'Description 3',
  },
];

let idCounter = 3;

const getBoards = (req, res) => res.status(200).send(boards);

const addBoard = (req, res) => {
  const { name, description } = req.body;

  idCounter++;

  let newBoard = {
    id: idCounter,
    name,
    description,
  };

  boards = [...boards, newBoard];

  return res.status(200).send('Successfully added new board.');
};

const editBoard = (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  const boardIndex = boards.findIndex(board => board.id === parseInt(id, 10));

  boards[boardIndex].name = name;
  boards[boardIndex].description = description;

  return res.status(200).send('Successfully edited board.');
};

const deleteBoard = (req, res) => {
  const { id } = req.params;

  const boardIndex = boards.findIndex(board => board.id === parseInt(id, 10));

  boards.splice(boardIndex, 1);

  return res.status(200).send('Successfully deleted board.');
};

module.exports = {
  getBoards,
  addBoard,
  editBoard,
  deleteBoard,
};
