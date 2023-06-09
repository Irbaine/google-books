import React from 'react';
//import ReactDOM from 'react-dom';
//import createRoot from 'react-dom';
import ReactDOM from "react-dom/client";
import './index.css';
import State from './containers/State';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
//import { data } from './data'; // data is not exported as default  // that is why it should be distructured {}


//ReactDOM.render( <State /> , document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <State />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

