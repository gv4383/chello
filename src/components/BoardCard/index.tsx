import React from 'react';
import { Board } from '../../redux/types/boards';

interface Props {
  board: Board;
}

const BoardCard = (props: Props) => {
  const { board } = props;
  const { name } = board;

  return <p>{name}</p>;
};

export default BoardCard;
