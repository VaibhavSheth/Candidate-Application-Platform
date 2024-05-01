// src/redux/filterReducer.js

// Define your initial state
const initialState = {
    minExperience: 0,
    companyName: '',
    location: '',
    remote: false,
    techStack: [],
    role: '',
    minBasePay: 0,
  };
  
  // Define your filter actions
  const SET_MIN_EXPERIENCE = 'SET_MIN_EXPERIENCE';
  const SET_COMPANY_NAME = 'SET_COMPANY_NAME';
  const SET_LOCATION = 'SET_LOCATION';
  const SET_REMOTE = 'SET_REMOTE';
  const SET_TECH_STACK = 'SET_TECH_STACK';
  const SET_ROLE = 'SET_ROLE';
  const SET_MIN_BASE_PAY = 'SET_MIN_BASE_PAY';
  
  // Define your filter action creators
  export const setMinExperience = (minExperience) => ({
    type: SET_MIN_EXPERIENCE,
    payload: minExperience,
  });
  
  export const setCompanyName = (companyName) => ({
    type: SET_COMPANY_NAME,
    payload: companyName,
  });
  
  export const setLocation = (location) => ({
    type: SET_LOCATION,
    payload: location,
  });
  
  export const setRemote = (remote) => ({
    type: SET_REMOTE,
    payload: remote,
  });
  
  export const setTechStack = (techStack) => ({
    type: SET_TECH_STACK,
    payload: techStack,
  });
  
  export const setRole = (role) => ({
    type: SET_ROLE,
    payload: role,
  });
  
  export const setMinBasePay = (minBasePay) => ({
    type: SET_MIN_BASE_PAY,
    payload: minBasePay,
  });
  
  // Define your filter reducer function
  const filterReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_MIN_EXPERIENCE:
        return { ...state, minExperience: action.payload };
      case SET_COMPANY_NAME:
        return { ...state, companyName: action.payload };
      case SET_LOCATION:
        return { ...state, location: action.payload };
      case SET_REMOTE:
        return { ...state, remote: action.payload };
      case SET_TECH_STACK:
        return { ...state, techStack: action.payload };
      case SET_ROLE:
        return { ...state, role: action.payload };
      case SET_MIN_BASE_PAY:
        return { ...state, minBasePay: action.payload };
      default:
        return state;
    }
  };
  
  export default filterReducer;
  