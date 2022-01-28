import React from 'react';
import ReactDOM from 'react-dom';

//components
import App from './App.js';
import Header from "./Layouts/Header/Header";
import Footer from "./Layouts/Footer/Footer";

ReactDOM.render( 
    <> 
    <Header/> 
    <App /> 
    <Footer/> 
    </>,
  document.getElementById('root')
);