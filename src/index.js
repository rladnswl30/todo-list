import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

// reducer
import reducers from './reducers';
// redux 불러오기
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// redux store 생성 - store는 오직 하나
// reducer를 여러개 만들어 관리.
// window.devTollsExtension은 Deprecated 되었다.
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();