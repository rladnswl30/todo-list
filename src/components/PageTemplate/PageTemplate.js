import React from 'react';
import styles from './PageTemplate.scss'
import classNames from 'classnames/bind';

// style className에 binding
// module의 decoupling을 위해 사용
const cx = classNames.bind(styles);

// children 값으로 컴포넌트를 받아 적용
const PageTemplate = ({ children }) => {
    // console.log(children);
    return (
        <div className={cx('page-template')}>
            <h1>일정 관리</h1>
            <div className={cx('content')}>
                {children}
            </div>
        </div>
    );
};

export default PageTemplate;