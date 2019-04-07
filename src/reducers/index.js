import input from './input'
import todos from './todos';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    input,
    todos
});

export default reducers;