import React from 'react';
import styles from './TodoInput.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const TodoInput = ({ value, onChange, onInsert, onKeyPress }) => {

    return (
        <div className={cx('todo-input')}>
            <input onChange={onChange} value={value} onKeyPress={onKeyPress} />
            <div className={cx('add-button')} onClick={onInsert}>추가</div>
        </div>
    );
};

export default TodoInput;