import { Map, List } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

// action type 정의
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

// action 생성
export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);

// reducer 초기 상태 정의
const initialState = List([
    Map({
        id: 0,
        text: '리액트 공부하기',
        done: true
    }),
    Map({
        id: 1,
        text: '컴포넌트 스타일링 해보기',
        done: false
    })
]);

// action type에 binding할 함수 작성
export default handleActions({
    [INSERT]: (state, action) => {
        // console.log(state);
        // console.log(action);
        // 
        // action.payload.id, actoin.payload.text, action.payload.done
        const { id, text, done } = action.payload;

        // payload 안에 있는 id, text, done의 reference를 만들어준다.
        // == push(Map(action.payload);
        return state.push(Map({
            id,
            text,
            done
        }));
    },

    [TOGGLE]: (state, action) => {
        // console.log(state);
        // console.log(action);
        // 비구조화 할당 개념.
        // id라는 reference에 action.payload값을 넣는다는 의미.
        // == const id = action.payload
        const { payload: id } = action;

        // 전달받은 id로 index 조회
        const index = state.findIndex(todo => todo.get('id') === id);

        // updateIn을 통해 현재 값을 참조하여 반대 값으로 설정
        // == return state.setIn([index, 'done'], !state.getIn([0, index]));
        return state.updateIn([index, 'done'], done => !done);
    },

    [REMOVE]: (state, action) => {
        const { payload: id } = action;
        const index = state.findIndex(todo => todo.get('id') === id);
        return state.delete(index);
    }
}, initialState) 