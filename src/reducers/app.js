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
    case ActionTypes.UPDATE_PARTICIPANT: {
      return {
        ...state,
        participants: state.participants.map(
          participant =>
            (participant.id === action.participant.id ? action.participant : participant)
        )
      };
    }
    case ActionTypes.DELETE_PARTICIPANT: {
      return {
        ...state,
        participants: state.participants.filter(participant => participant.id !== action.id)
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
