import { combineReducers } from 'redux';
import staffReducer from './index';

const reducers = combineReducers({
    staffs: staffReducer
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;