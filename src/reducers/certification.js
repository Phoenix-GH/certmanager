/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import {
  GET_CERTIFICATIONS,
  ADD_CERTIFICATION,
  READ_CERTIFICATIONS_SUCCESS,
  READ_CERTIFICATIONS_FAILURE,
  GET_CERTIFICATION,
  DELETE_CERTIFICATION,
  READ_CERTIFICATION_SUCCESS,
  READ_CERTIFICATION_FAILURE,
  DELETE_CERTIFICATION_SUCCESS,
  DELETE_CERTIFICATION_FAILURE,
  CLEAR_CERTIFICATION_SUCCESS,
  GET_USERS,
  READ_USERS_SUCCESS,
  READ_USERS_FAILURE,
} from '../actions/certification.js';


const INITIAL_STATE = {
  certifications: [],
  certification: {},
  users: [],
  loading: false,
  error: ''
};

const certifications = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CERTIFICATIONS:
    case GET_CERTIFICATION:
    case GET_USERS:
    case DELETE_CERTIFICATION:
      return {
        ...state,
        loading: true,
      };
    case READ_CERTIFICATIONS_SUCCESS:
      return {
        ...state,
        certifications: action.data,
        loading: false,
        error: '',
      };
    case READ_CERTIFICATIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: 'Read certifications failed'
      };
    case READ_CERTIFICATION_SUCCESS:
      return {
        ...state,
        certification: action.data,
        loading: false,
        error: '',
      };
    case READ_CERTIFICATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: 'Read certification failed'
      };
    case DELETE_CERTIFICATION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
      };
    case DELETE_CERTIFICATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: 'Delete certification failed'
      };
    case READ_USERS_SUCCESS:
      return {
        ...state,
        users: action.data,
        loading: false,
        error: '',
      };
    case READ_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: 'Read certification failed'
      };
    case CLEAR_CERTIFICATION_SUCCESS:
      return {
        ...state,
        certification: [],
        loading: false,
        error: '',
      };
    default:
      return state;
  }
};

export default certifications;
