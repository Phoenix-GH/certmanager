/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

export const GET_CERTIFICATIONS = 'GET_CERTIFICATIONS';
export const GET_CERTIFICATION = 'GET_CERTIFICATION';
export const GET_USERS = 'GET_USERS';
export const DELETE_CERTIFICATION = 'DELETE_CERTIFICATION';
export const ADD_CERTIFICATION = 'ADD_CERTIFICATION';
export const READ_CERTIFICATIONS_SUCCESS = 'READ_CERTIFICATIONS_SUCCESS';
export const READ_CERTIFICATIONS_FAILURE = 'READ_CERTIFICATIONS_FAILURE';

export const READ_CERTIFICATION_SUCCESS = 'READ_CERTIFICATION_SUCCESS';
export const READ_CERTIFICATION_FAILURE = 'READ_CERTIFICATION_FAILURE';

export const DELETE_CERTIFICATION_SUCCESS = 'DELETE_CERTIFICATION_SUCCESS';
export const DELETE_CERTIFICATION_FAILURE = 'DELETE_CERTIFICATION_FAILURE';

export const READ_USERS_SUCCESS = 'READ_USERS_SUCCESS';
export const READ_USERS_FAILURE = 'READ_USERS_FAILURE';

export const CLEAR_CERTIFICATION_SUCCESS = 'CLEAR_CERTIFICATION_SUCCESS';

const BASE_URL = 'http://ec2-54-146-190-91.compute-1.amazonaws.com:3000/';

export const getAllCertifications = () => (dispatch) => {
  dispatch({
    type: GET_CERTIFICATIONS,
  });
  return(fetch(`${BASE_URL}certifications`))
    .then(res => res.json())
    .then(json => {
      dispatch({
        type: READ_CERTIFICATIONS_SUCCESS,
        data: json
      });
    })
    .catch(err => dispatch({
      type: READ_CERTIFICATIONS_FAILURE,
    }))
};

export const getCertification = (id) => (dispatch) => {
  dispatch({
    type: GET_CERTIFICATION,
  });
  return(fetch(`${BASE_URL}certifications/${id}`))
    .then(res => res.json())
    .then(json => {
      dispatch({
        type: READ_CERTIFICATION_SUCCESS,
        data: json
      });
    })
    .catch(err => dispatch({
      type: READ_CERTIFICATION_FAILURE,
    }))
};

export const getUsers = (id) => (dispatch) => {
  dispatch({
    type: GET_USERS,
  });
  return(fetch(`${BASE_URL}certifications/${id}/users`))
    .then(res => res.json())
    .then(json => {
      dispatch({
        type: READ_USERS_SUCCESS,
        data: json
      });
    })
    .catch(err => dispatch({
      type: READ_USERS_FAILURE,
    }))
};

export const deleteCertification = (id) => (dispatch) => {
  dispatch({
    type: GET_USERS,
  });
  return(fetch(`${BASE_URL}certifications/${id}`, {
    method: 'delete'
    }))
    .then(res => res.json())
    .then(json => {
      dispatch({
        type: DELETE_CERTIFICATION_SUCCESS,
      });
    })
    .catch(err => dispatch({
      type: DELETE_CERTIFICATION_FAILURE,
    }))
};

export const clearCertification = () => (dispatch) => {
  return (dispatch({
    type: CLEAR_CERTIFICATION_SUCCESS,
    data: {},
  }));
};