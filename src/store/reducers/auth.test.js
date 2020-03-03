import reducer from './auth';
import { ActionTypes } from '../actions/actionTypes';

describe('Auth Reducer', () => {
  const initState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: '/'
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initState);
  });

  it('should store the token upon login', () => {
    const action = {
      type: ActionTypes.AuthSuccess,
      idToken: 'some-token',
      userId: 'some-user-id'
    };
    expect(reducer(initState, action)).toEqual({
        ...{...initState, ...{ token: 'some-token', userId: 'some-user-id' }}
    });
  });
});
