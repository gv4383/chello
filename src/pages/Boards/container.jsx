import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { boards } from '../../redux/selectors/boards';
import { getBoards } from '../../redux/Actions/boardsActions';
import BoardsPresentation from './presentation';

const BoardsContainer = props => {
  const { boards, getBoards } = props;
  useEffect(() => {
    getBoards();
  }, [getBoards]);

  return <BoardsPresentation boards={boards} />;
};

const mapStateToProps = state => ({
  boards: boards(state),
});

const mapDispatchToProps = dispatch =>
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
