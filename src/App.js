// App.js

import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import JobListContainer from '../src/components/JobListContainer';


const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Candidate Application Platform</h1>
        <JobListContainer />
      </div>
    </Provider>
  );
};

export default App;
