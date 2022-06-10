import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import FunFacts from "./challenge-1/fun-facts";
// import MyReasons from "./challenge-2/my-reasons";
// import BasicLayout from "./challenge-3/basic-layout";
// import App from './challenge-4/app';
// import App from './challenge-5/app';
import App from './challenge-6/app';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    {/*<FunFacts />*/}
    {/*<MyReasons />*/}
    {/*<BasicLayout/>*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
