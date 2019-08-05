import React, { Fragment } from 'react';

const Boards = props => {
  const { boards } = props;

  const displayBoards = boards && boards.map((board, i) => <p key={i}>{board}</p>);

  return (
    <Fragment>
      <h2>TEST</h2>
      {displayBoards}
    </Fragment>
  );
};

export default Boards;
