import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';
import middleware from './middleware/index'


const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25
});

let store = createStore(rootReducer, composeEnhancers(middleware));

export default store