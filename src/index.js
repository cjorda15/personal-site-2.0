import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import App from './components/app.js';
import './script_styles.js'
const history = createHistory()


ReactDOM.render(
  <Router history ={history}>
    <Route to ='/' component ={App}/>
  </Router>,
   document.getElementById('root'));
