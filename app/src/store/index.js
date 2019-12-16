import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
//import rootSaga from '../sagas';
import { createLogger } from 'redux-logger'

const logger = createLogger({
  // ...options
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer, 
    applyMiddleware(sagaMiddleware, logger)
);

//sagaMiddleware.run(rootSaga);

export default store;

