// src/redux/jobReducer.js

import {
    FETCH_JOB_LISTINGS_REQUEST,
    FETCH_JOB_LISTINGS_SUCCESS,
    FETCH_JOB_LISTINGS_FAILURE,
  } from "../redux/jobActions";
  
  const initialState = {
    jobListings: [],
    loading: false,
    error: null,
  };
  
  const jobReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_JOB_LISTINGS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_JOB_LISTINGS_SUCCESS:
        return {
          ...state,
          jobListings: action.payload,
          loading: false,
        };
      case FETCH_JOB_LISTINGS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default jobReducer;
  