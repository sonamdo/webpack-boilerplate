import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'bootstrap'



import $ from 'jquery';
import Main from "./components/Main.js"

ReactDOM.render(<Main />, document.getElementById('app'));
