/* eslint-disable linebreak-style */
import { myFirebase, db } from '../firebase/firebase';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const VERIFY_REQUEST = 'VERIFY_REQUEST';
export const VERIFY_SUCCESS = 'VERIFY_SUCCESS';

export const CREATE_PROJECT_REQUEST = 'CREATE_PROJECT_REQUEST';
export const CREATE_PROJECT_SUCCESS = 'CREATE_PROJECT_SUCCESS';
export const CREATE_PROJECT_FAILURE = 'CREATE_PROJECT_FAILURE';

export const CREATE_JOB_REQUEST = 'CREATE_JOB_REQUEST';
export const CREATE_JOB_SUCCESS = 'CREATE_JOB_SUCCESS';
export const CREATE_JOB_FAILURE = 'CREATE_JOB_FAILURE';

const requestLogin = () => ({ type: LOGIN_REQUEST });

const receiveLogin = (user) => ({ type: LOGIN_SUCCESS, user });

const loginError = () => ({ type: LOGOUT_FAILURE });

const requestLogout = () => ({ type: LOGOUT_REQUEST });

const receiveLogout = () => ({ type: LOGOUT_SUCCESS });

const logoutError = () => ({ type: LOGOUT_FAILURE });

const requestSignup = () => ({ type: SIGNUP_REQUEST });

const receiveSignup = (user) => ({ type: SIGNUP_SUCCESS, user });

const signupError = (error) => ({ type: SIGNUP_FAILURE, error });

const verifyRequest = () => ({ type: VERIFY_REQUEST });

const verifySuccess = () => ({ type: VERIFY_SUCCESS });

const requestAddProject = () => ({ type: CREATE_PROJECT_REQUEST });

const receiveAddProject = () => ({ type: CREATE_PROJECT_SUCCESS });

const addProjectError = (error) => ({ type: CREATE_PROJECT_FAILURE, error });

const requestAddJob = () => ({ type: CREATE_JOB_REQUEST });

const receiveAddJob = () => ({ type: CREATE_JOB_SUCCESS });

const addJobError = (error) => ({ type: CREATE_JOB_FAILURE, error });

export const loginUser = (email, password) => (dispatch) => {
  dispatch(requestLogin());
  myFirebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => dispatch(receiveLogin(user)))
    .catch((error) => dispatch(loginError(error)));
};

export const logoutUser = () => (dispatch) => {
  dispatch(requestLogout());
  myFirebase
    .auth()
    .signOut()
    .then(() => {
      dispatch(receiveLogout());
    })
    .catch((error) => {
      dispatch(logoutError(error));
    });
};

export const signupUser = (name, username, email, password) => (dispatch) => {
  dispatch(requestSignup());
  myFirebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      dispatch(receiveSignup(result.user));
      result.user.updateProfile({ displayName: username });
      db.collection('users').add({
        created: new Date(),
        email,
        name,
        id: result.user.uid
      });
    })
    .catch((error) => dispatch(signupError(error)));
};

export const verifyAuth = () => (dispatch) => {
  dispatch(verifyRequest());
  myFirebase
    .auth()
    .onAuthStateChanged((user) => {
      if (user !== null) {
        dispatch(receiveLogin(user));
      }
      dispatch(verifySuccess());
    });
};

export const addProject = (data) => (dispatch) => {
  dispatch(requestAddProject);
  db.collection('projects').add({
    title: data.title,
    des: data.des,
    category: data.category,
    skill: data.skill,
    duration: data.duration,
    location: data.location,
    remote: data.remote,
    created: new Date(),
    owner: myFirebase.auth().currentUser.uid,
    proposal: []
  }).then(() => {
    dispatch(receiveAddProject());
  }).catch((error) => dispatch(addProjectError(error)));
};

export const addJob = (data) => (dispatch) => {
  dispatch(requestAddJob);
  db.collection('jobs').add({
    title: data.title,
    des: data.des,
    category: data.category,
    fulltime: data.fulltime,
    duration: data.duration,
    location: data.location,
    remote: data.remote,
    created: new Date(),
    owner: myFirebase.auth().currentUser.uid,
    application: []
  }).then(() => {
    dispatch(receiveAddJob());
  }).catch((error) => dispatch(addJobError(error)));
};
