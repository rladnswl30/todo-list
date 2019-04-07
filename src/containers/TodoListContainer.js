import React, { Component } from 'react';
import TodoList from '../components/TodoList/TodoList';

// component를 store에 연결시키기 위해 필요
import { connect } from 'react-redux';
// dispatch를 binding 할 때 편리하게 한다.
import { bindActionCreators } from 'redux';

// reducers
import * as todosActions from '../reducers/todos';

class TodoListContainer extends Component {
    handleToggle = (id) => {
        const { TodosActions } = this.props;
        TodosActions.toggle(id);
    };

    handleRemove = (id) => {
        const { TodosActions } = this.props;
        TodosActions.remove(id);
    };

    render() {
        const { todos } = this.props;
        const { handleToggle, handleRemove } = this;
        return (
            <TodoList
                todos={todos}
                onToggle={handleToggle}
                onRemove={handleRemove}
            />
        );
    }
}

// connect([mapStateToProps], [mapDispatchToProps], [mergeProps])
export default connect(
    (state) => ({
        todos: state.todos
    }),
    (dispatch) => ({
        TodosActions: bindActionCreators(todosActions, dispatch)
    })
)(TodoListContainer);