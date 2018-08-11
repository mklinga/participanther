import ActionTypes from '../actions/ActionTypes';

const initialState = {
  participants: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GENERATE_PEOPLE: {
      return {
        ...state,
        participants: action.participants
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
