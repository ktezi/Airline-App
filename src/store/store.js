import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';
import middleware from './middleware/index'

let store = createStore(rootReducer, composeWithDevTools(middleware));

export default store