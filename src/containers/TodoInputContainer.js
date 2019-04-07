import React, { Component } from 'react';
import TodoInput from '../components/TodoInput/TodoInput';

// component를 store에 연결시키기 위해 필요
import { connect } from 'react-redux';
// dispatch를 binding 할 때 편리하게 한다.
import { bindActionCreators } from 'redux';

// reducers
import * as inputActions from '../reducers/input';
import * as todosActions from '../reducers/todos';

class TodoInputContainer extends Component {
    id = 1;
    getId = () => {
        return ++this.id;
    };

    handleChange = (e) => {
        const { value } = e.target;
        const { InputActions } = this.props;
        InputActions.setInput(value);
    };

    handleInsert = () => {
        const { InputActions, TodoActions, value } = this.props;
        const todo = {
            id: this.getId(),
            text: value,
            done: false
        };
        TodoActions.insert(todo);
        InputActions.setInput('');
    };

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleInsert();
        }
    }

    render() {
        const { value } = this.props;
        const { handleChange, handleInsert, handleKeyPress } = this;
        return (
            <TodoInput
                onChange={handleChange}
                onInsert={handleInsert}
                onKeyPress={handleKeyPress}
                value={value}
            />
        );
    }
}

/* connect([mapStateToProps], [mapDispatchToProps], [mergeProps])
mapStateToProps : store.getState()의 결과값인 state를 파라미터로 받아 component에서 사용할 props 반환
mapDispatchToProps : dispatch를 파라미터로 받아 action을 dispatch하는 함수들을 객체 안에 넣어서 반환
mergeProps : state와 dispatch가 동시에 필요한 함수를 props로 전달해야 할 때 사용
mapStateToProps, mapDispatchToProps 함수에 대한 refer를 따로 만들지 않고, 바로 정의함 */
export default connect(
    (state) => ({
        value: state.input.get('value')
    }),
    (dispatch) => ({
        /*
        bindActionCreators를 이용해 dispatch를 일일이 binding시키지 않아도 된다.
        InputActions : {
            setInput : (value) => dispatch(inpuatActions.setInput(value))
        }
        */
        InputActions: bindActionCreators(inputActions, dispatch),
        TodoActions: bindActionCreators(todosActions, dispatch)
    })
)(TodoInputContainer);