// src/components/JobListContainer.js

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchJobs } from '../redux/jobActions';

const JobListContainer = ({ jobListings, fetchJobs }) => {
  useEffect(() => {
    fetchJobs(); // Dispatch fetchJobs action when component mounts
  }, [fetchJobs]); // Make sure this effect runs only once

  return (
    <div>
      <h2>Job Listings</h2>
      {jobListings && jobListings.length > 0 ? (
        <ul>
          {jobListings.map((job) => (
            <li key={job.jdUid}>
              <h3>{job.jobRole}</h3>
              <p>Location: {job.location}</p>
              {/* Additional job details */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No job listings available.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  jobListings: state.jobListings // Assuming this is the correct path in your Redux store state
});

const mapDispatchToProps = {
  fetchJobs
};

export default connect(mapStateToProps, mapDispatchToProps)(JobListContainer);
