# Todo-list project

책 : 리액트를 다루는 기술

저자 : 김민준

http://wiki.navercorp.com/pages/viewpage.action?pageId=421216379

## 기능
- Input 박스에 텍스트 입력
- button을 눌러 일정 추가
- enter를 눌러 일정 추가
- toggle 버튼을 눌러 일정 완료
- 일정 지우기
 

## 관리하는 State
- input (value)
- todos (id, text, done)

## 프로젝트 개발 시 참고사항
```
create-react-app todo-list-tutorial  
yarn add node-sass sass-loader classnames open-color → CSS 생략  
yarn add redux react-redux redux-actions immutable  
store생성 시 크롬 extensin 사용을 위해 window.__REDUX_DEVTOOLS_EXTENSION__ \&& window.__REDUX_DEVTOOLS_EXTENSION__() 사용
```


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).