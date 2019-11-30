import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { boards } from '../../redux/selectors/boards';
import { getBoards } from '../../redux/Actions/boards';
import { Board } from '../../redux/types/boards';
import DashboardPresentation from './presentation';

interface Props {
  boards: Board[];
  getBoards: typeof getBoards;
}

const Dashboard = (props: Props) => {
  const { boards, getBoards } = props;
  useEffect(() => {
    getBoards();
  }, [getBoards]);

  return <DashboardPresentation boards={boards} />;
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
)(Dashboard);
