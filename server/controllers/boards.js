const test = ['TEST', 'YEP', 'WOW'];

const getTest = (req, res) => res.status(200).send(test);

module.exports = {
  getTest,
};
