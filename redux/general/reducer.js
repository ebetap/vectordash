import * as types from './types';

const initialState = {
  loading: false
};

const generalReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SET_LOADING: {
      return {
        ...state,
        loading: payload
      };
    }

    default: {
      return state;
    }
  }
};

export default generalReducer;
