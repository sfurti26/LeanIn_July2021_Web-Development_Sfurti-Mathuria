import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let curDate = new Date();
curDate = curDate.getHours();
let greeting = '';
const cssStyle = {};

if (curDate >= 1 && curDate < 12) {
  greeting = 'Good Morning';
  cssStyle.color = 'light blue';
}
else if (curDate >= 12 && curDate <= 16) {
  greeting = 'Good Afternoon';
  cssStyle.color = 'light pink';
}
else {
  greeting = 'Good Evening';
  cssStyle.color = 'coral';
}

ReactDOM.render(
  <>
    <div>
      <h1>Hello,<span style={cssStyle}>{greeting}</span></h1>
    </div>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
