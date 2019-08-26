import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { boards } from '../../redux/selectors/boards';
import { getBoards } from '../../redux/Actions/boards';
import BoardsPresentation from './presentation';

interface Props {
  boards: any[];
  getBoards: typeof getBoards;
}

const BoardsContainer = (props: Props) => {
  const { boards, getBoards } = props;
  useEffect(() => {
    getBoards();
  }, [getBoards]);

  return <BoardsPresentation boards={boards} />;
};

const mapStateToProps = (state: any) => ({
  boards: boards(state),
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      getBoards,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BoardsContainer);
