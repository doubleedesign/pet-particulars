import { createStore } from 'redux';
import reducer from './reducer';

// Create global state
// The store will exist in a global variable called 'store'
// Function takes a reducer as an argument
const store = createStore(reducer);

export default store;