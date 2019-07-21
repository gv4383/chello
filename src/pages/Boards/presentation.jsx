import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

const Boards = () => {
  const [boards, setBoards] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/api/boards').then(res => setBoards(res.data));
  }, []);

  const displayBoards = boards && boards.map((board, i) => <p key={i}>{board}</p>);

  return (
    <Fragment>
      <h3>Hi there!</h3>
      {displayBoards}
    </Fragment>
  );
};

export default Boards;
