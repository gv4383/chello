const actionCreator = constant => ({
  loading: () => ({ type: `${constant}/LOADING` }),
  success: data => ({
    type: `${constant}/SUCCESS`,
    payload: data,
  }),
  error: error => ({
    type: `${constant}/ERROR`,
    error: error || 'There was an unknown error.',
  }),
});

export default actionCreator;
