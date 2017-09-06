import dva from 'dva';

export default {
  namespace: 'user',
  state: {},
  reducers: {
    'change'(state, { payload: data }) {
      return {...data};
    },
  },
};