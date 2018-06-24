import { combineReducers } from 'redux';
import catsReducer from './cats_reducer';


const rootReducer =  combineReducers({
  cats: catsReducer
});


export default rootReducer;


// Blank at start of lab.  I add:

// import { combineReducers } from 'redux'
// import catsReducer from './cats_reducer'
//
// export default combineReducers({catsReducer})
