// src/redux/store.js

import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; // Import Redux Thunk
import rootReducer from '../redux/rootReducer'; // Assuming you have a rootReducer

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

