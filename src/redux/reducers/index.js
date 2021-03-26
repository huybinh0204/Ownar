import {combineReducers} from 'redux';

import ModalLoadingReducer from './ModalLoading';

// @ts-ignore
const rootReducer = combineReducers({
    ModalLoadingReducer,
});

export default rootReducer;
