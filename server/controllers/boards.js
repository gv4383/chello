let test = ['TEST', 'YEP', 'WOW'];
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

let counter = 3;

const getTest = (req, res) => res.status(200).send(test);

const getBoards = (req, res) => res.status(200).send(boards);

const addBoard = (req, res) => {
  const { name, description } = req.body;

  counter++;

  let newBoard = {
    id: counter,
    name,
    description,
  };

  boards = [...boards, newBoard];

  return res.status(200);
};

const editBoard = (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  const boardIndex = boards.findIndex(board => board.id === id);

  boards[boardIndex].name = name;
  boards[boardIndex].description = description;

  return res.status(200);
};

const deleteBoard = (req, res) => {
  const { id } = req.params;

  const boardIndex = boards.findIndex(board => board.id === id);

  boards.splice(boardIndex, 1);

  return res.status(200);
};

module.exports = {
  getTest,
  getBoards,
  addBoard,
  editBoard,
  deleteBoard,
};
