// src/redux/jobActions.js

import { fetchJobListings } from '../services/apiService';

// Define action types
export const FETCH_JOB_LISTINGS_REQUEST = "FETCH_JOB_LISTINGS_REQUEST";
export const FETCH_JOB_LISTINGS_SUCCESS = "FETCH_JOB_LISTINGS_SUCCESS";
export const FETCH_JOB_LISTINGS_FAILURE = "FETCH_JOB_LISTINGS_FAILURE";

// Define action creators
export const fetchJobsRequest = () => ({
  type: FETCH_JOB_LISTINGS_REQUEST
});

export const fetchJobsSuccess = (jobs) => ({
  type: FETCH_JOB_LISTINGS_SUCCESS,
  payload: jobs
});

export const fetchJobsFailure = (error) => ({
  type: FETCH_JOB_LISTINGS_FAILURE,
  payload: error
});

// Define async action creator
export const fetchJobs = () => {
  return async (dispatch) => {
    dispatch(fetchJobsRequest());

    try {
      // Fetch jobs from API
      const response = await fetchJobListings(); // Assuming fetchJobListings is an async function
      const jobs = await response.json();
      dispatch(fetchJobsSuccess(jobs.jdList)); // Assuming jdList is the key containing job listings in the API response
    } catch (error) {
      dispatch(fetchJobsFailure(error.message));
    }
  };
};
