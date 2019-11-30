import React, { Fragment } from 'react';
import { Board } from '../../redux/types/boards';

import BoardCard from '../BoardCard';

interface Props {
  boards: Board[];
}

const Dashboard = (props: Props) => {
  const { boards } = props;

  const displayCards =
    boards && boards.map((board: Board) => <BoardCard key={board.id} board={board} />);

  return (
    <Fragment>
      <h1>Hello there!</h1>
      {displayCards}
    </Fragment>
  );
};

export default Dashboard;
