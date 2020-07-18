import * as types from './types';

const initialState = {
  loading: false,
  showSignupModal: false,
};

const generalReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SET_LOADING: {
      return {
        ...state,
        loading: payload,
      };
    }

    case types.SET_SIGNUP_MODAL: {
      return {
        ...state,
        showSignupModal: payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default generalReducer;
