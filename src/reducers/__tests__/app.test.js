/* eslint-env jest */
import appReducer from '../app';
import ActionTypes from '../../actions/ActionTypes';

const getDefaultState = () => ({
  participants: [
    {
      id: 1,
      name: 'Tim Thomason',
      email: 'tim@tim.com',
      phoneNumber: '12345'
    },
    {
      id: 2,
      name: 'Tom Tompson',
      email: 'tom@tom.net',
      phoneNumber: '67890'
    }
  ]
});

describe('appReducer', () => {
  it('Should return the state unchanged by default', () => {
    const initialState = getDefaultState();
    const action = { type: 'non-existing' };
    const result = appReducer(initialState, action);
    expect(result).toBe(initialState);
  });

  it('Should be able to update participants', () => {
    const initialState = getDefaultState();
    const updatedParticipant = {
      id: 2,
      name: 'Joe Doe',
      email: 'edward@snowden.com',
      phoneNumber: '000'
    };

    const expected = {
      participants: [initialState.participants[0], updatedParticipant]
    };

    const action = { type: ActionTypes.UPDATE_PARTICIPANT, participant: updatedParticipant };
    const result = appReducer(initialState, action);
    expect(result).toEqual(expected);
  });

  it('Should be able to add new participants', () => {
    const initialState = getDefaultState();
    const newParticipant = {
      id: 3,
      name: 'Mike Smith',
      email: 'bubbles@sunnyvale.com',
      phoneNumber: 'n/a'
    };

    const expected = {
      participants: [newParticipant, ...initialState.participants]
    };

    const action = { type: ActionTypes.ADD_NEW_PARTICIPANT, participant: newParticipant };
    const result = appReducer(initialState, action);
    expect(result).toEqual(expected);
  });

  it('Should be able to remove participants', () => {
    const initialState = getDefaultState();
    const removedId = 2;

    const expected = {
      participants: [initialState.participants[0]]
    };

    const action = { type: ActionTypes.DELETE_PARTICIPANT, id: removedId };
    const result = appReducer(initialState, action);
    expect(result).toEqual(expected);
  });
});
