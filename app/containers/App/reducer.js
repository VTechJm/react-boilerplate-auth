/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';
import { combineReducers } from 'redux';

import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  CHANGE_FORM,
  SET_AUTH,
  SENDING_REQUEST,
  REQUEST_ERROR,
  CLEAR_ERROR,
} from './constants';

import auth from '../auth';

const authInitialState = fromJS({
  formState: {
    username: '',
    password: '',
  },
  loginError: '',
  currentlySending: false,
  loggedIn: auth.loggedIn(),
});

function usersReducer(state = authInitialState, action) {
  switch (action.type) {
    case CHANGE_FORM:
      return {
        ...state,
        formState: action.newFormState,
      };

    case SET_AUTH:
      return {
        ...state,
        loggedIn: action.newAuthState,
      };

    case SENDING_REQUEST:
      return {
        ...state,
        currentlySending: action.sending,
      };

    case REQUEST_ERROR:
      return {
        ...state,
        loginError: action.error,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        loginError: '',
      }

    default:
      return state;
  }
}

export default usersReducer;
