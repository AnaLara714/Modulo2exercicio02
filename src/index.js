import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Welcome from './features/Welcome';

const title = "Módulo 2: Exercício 02 - DFE"
const footer_desc = "2022.1 - @Ana_Lara"

ReactDOM.render(
  <Welcome title={title} footer_desc={footer_desc}/>
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

