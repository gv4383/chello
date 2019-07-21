const test = ['TEST'];

const getTest = (req, res) => res.status(200).send(test.join());

module.exports = {
  getTest,
};
