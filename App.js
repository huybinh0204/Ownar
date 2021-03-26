import React from 'react';
import {Provider} from 'react-redux';
import {View} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './src/redux/reducers/index';
import RootView from './src/RootView';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

let store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
const App = () => {
    return (
        <Provider store={store}>
            <RootView/>
        </Provider>
    );
};
export default App;
