import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { routes } from "./Router";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Switch>
      {
        routes.map((item)=>{return <Route key={item.path} path={item.path} component={item.component}/>})
      }
      <Redirect from="/" to="/home" exact/>
      <Redirect to="/404"/>
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
