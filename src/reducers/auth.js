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
  CREATE_PROJECT_FAILURE,
  CREATE_JOB_REQUEST,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_FAILURE,
  DATA_REQUEST,
  DATA_SUCCESS,
  DATA_FAILURE,
  IMAGE_UPLOAD_REQUEST,
  IMAGE_UPLOAD_SUCCESS,
  IMAGE_UPLOAD_FAILURE,
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE
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
    isAddingJob: false,
    addingJobError: false,
    isFetching: false,
    fetchingError: false,
    isUploading: false,
    uploadError: false,
    isFetchingJob: false,
    fetchingJobError: false,
    job: {},
    data: {},
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
        user: action.user,
        error: {}
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: false,
        loginError: true,
        error: action.error
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
        user: {},
        job: {},
        data: {}
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        isLoggingOut: false,
        logoutError: true,
        error: action.error
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
        isVerifying: true
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
    case CREATE_JOB_REQUEST:
      return {
        ...state,
        isAddingJob: true,
        addingJobError: false
      };
    case CREATE_JOB_SUCCESS:
      return {
        ...state,
        isAddingJob: false,
        addingJobError: false
      };
    case CREATE_JOB_FAILURE:
      return {
        ...state,
        isAddingJob: false,
        addingJobError: true,
        error: action.error
      };
    case DATA_REQUEST:
      return {
        ...state,
        isFetching: true,
        fetchingError: false
      };
    case DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        fetchingError: false,
        data: action.data
      };
    case DATA_FAILURE:
      return {
        ...state,
        fetchingError: true,
        isFetching: false
      };
    case IMAGE_UPLOAD_REQUEST:
      return {
        ...state,
        isUploading: true,
        uploadError: false
      };
    case IMAGE_UPLOAD_SUCCESS:
      return {
        ...state,
        isUploading: false,
        uploadError: false
      };
    case IMAGE_UPLOAD_FAILURE:
      return {
        ...state,
        isUploading: false,
        uploadError: true
      };
    case FETCH_JOBS_REQUEST:
      return {
        ...state,
        isFetchingJob: true,
        fetchingJobError: false
      };
    case FETCH_JOBS_SUCCESS:
      return {
        ...state,
        isFetchingJob: false,
        fetchingJobError: false,
        job: action.job
      };
    case FETCH_JOBS_FAILURE:
      return {
        ...state,
        isFetchingJob: false,
        fetchingError: true,
        error: action.error
      };
    default:
      return false;
  }
};
