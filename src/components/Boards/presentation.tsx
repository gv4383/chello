import React, { Fragment } from 'react';

interface Props {
  boards: any[];
}

const Boards = (props: Props) => {
  const { boards } = props;

  const displayBoards = boards && boards.map((board, i) => <p key={board.id}>{board.name}</p>);

  return (
    <Fragment>
      <h1>Hello there!</h1>
      {displayBoards}
    </Fragment>
  );
};

export default Boards;
