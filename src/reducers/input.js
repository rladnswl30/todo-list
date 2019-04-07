import { Map } from 'immutable'; // [14-1] immutable의 Map 사용을 위해 import
import { handleActions, createAction } from 'redux-actions'; // [14-3] 액션 생성 자동화 및 쉬운 액션 관리

// input reducer의 action type 정의
// reducer 이름/action type 이름
// 다른 reducer간 중복 방지
const SET_INPUT = 'input/SET_INPUT';

// action 생성
export const setInput = createAction(SET_INPUT);

// reducer 초기 상태 정의
const initialState = Map({
    value: ''
});

// action type에 binding할 함수 작성
export default handleActions({
    [SET_INPUT]: (state, action) => {
        return state.set('value', action.payload)
    }
}, initialState);