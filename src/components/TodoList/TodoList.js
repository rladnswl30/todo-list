import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem';

class TodoList extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }
    render() {
        /* 
        ***** Ducks구조로 바꾸기 전 코드 *****
        const { todos, onToggle, onRemove } = this.props;
        const todoList = todos.map(
            todo => (
                <TodoItem key={todo.id} done={todo.done} onToggle={() => onToggle(todo.id)} onRemove={() => onRemove(todo.id)}>{todo.text}</TodoItem>
            )
        ); */
        const { todos, onToggle, onRemove } = this.props;
        const todoList = todos.map(
            todo => (
                <TodoItem
                    key={todo.get('id')}
                    done={todo.get('done')}
                    onToggle={() => onToggle(todo.get('id'))}
                    onRemove={() => onRemove(todo.get('id'))}>
                    {todo.get('text')}
                </TodoItem>
            )
        )
        return (
            <div>
                {todoList}
            </div>
        )
    }
}

export default TodoList;