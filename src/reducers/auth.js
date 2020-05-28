/* eslint-disable linebreak-style */
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_FAILURE
} from '../actions';

export default (
  state = {
    isLoggingIn: false,
    isSigningUp: false,
    isLoggingOut: false,
    isVerifying: false,
    loginError: false,
    signupError: false,
    logoutError: false,
    isAuthenticated: false,
    isAddingProject: false,
    addingProjectError: false,
    user: {},
    error: {}
  },
  action
) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        loginError: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: true,
        user: action.user
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: false,
        loginError: true
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        isLoggingOut: true,
        logoutError: false
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggingOut: false,
        isAuthenticated: false,
        user: {}
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        isLoggingOut: false,
        logoutError: true
      };
    case SIGNUP_REQUEST:
      return {
        ...state,
        isSigningUp: true,
        signupError: false
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isSigningUp: false,
        isAuthenticated: true,
        user: {}
      };
    case SIGNUP_FAILURE:
      return {
        isSigningUp: false,
        signupError: true,
        isAuthenticated: false,
        error: action.error
      };
    case VERIFY_REQUEST:
      return {
        ...state,
        isVerifying: true,
        verifyingError: false
      };
    case VERIFY_SUCCESS:
      return {
        ...state,
        isVerifying: false
      };
    case CREATE_PROJECT_REQUEST:
      return {
        ...state,
        isAddingProject: true,
        addingProjectError: false
      };
    case CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        isAddingProject: false,
        addingProjectError: false
      };
    case CREATE_PROJECT_FAILURE:
      return {
        ...state,
        isAddingProject: false,
        addingProjectError: true,
        error: action.error
      };
    default:
      return false;
  }
};
