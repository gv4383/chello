const test = ['TEST', 'YEP', 'WOW'];
const boards = [
  {
    id: 1,
    name: 'Board 1',
    desscription: 'Description 1',
  },
  {
    id: 2,
    name: 'Board 2',
    desscription: 'Description 2',
  },
  {
    id: 3,
    name: 'Board 3',
    desscription: 'Description 3',
  },
];

const getTest = (req, res) => res.status(200).send(test);

const getBoards = (req, res) => res.status(200).send(boards);

module.exports = {
  getTest,
  getBoards,
};
