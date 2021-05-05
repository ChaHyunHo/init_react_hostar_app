import React from 'react';  // node_modules라는 디렉터리에 react모듈이 있고 이것을 임포트함
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    // React.StrictMode 리액트의 레거시 기능을 사용 못하게하는 기능( ref, componentWillMount 등 나중에 사라지게될 옛날 기능을 사용했을시 경고 )
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
