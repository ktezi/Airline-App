import { combineReducers } from 'redux'
import { loginDetails } from './login';
import { otherDetails } from './other'
import { flights } from './passenger';

const rootReducer = combineReducers({ loginDetails, flights, otherDetails })
export default rootReducer