import input from './input';
import todos from './todos';

// reducer를 합치기 위해 combineReducers 사용
import { combineReducers } from 'redux';

// sub reducer를 하나로 합친다.
// store 형태를 key : value 형태로 정의 가능
const reducers = combineReducers({
    input,
    todos
});

export default reducers;