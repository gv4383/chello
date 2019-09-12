import React, { Fragment } from 'react';
import { Board } from '../../redux/types/boards';

interface Props {
  boards: Board[];
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
