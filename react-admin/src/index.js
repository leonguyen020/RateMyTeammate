import React from 'react';
import ReactDOM from 'react-dom';

import {
	BrowserRouter,
    // HashRouter,
    Route,
    Switch
} from 'react-router-dom';
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "semantic-ui-css/semantic.min.css";

import App from 'containers/App/App.jsx';

import './assets/css/bootstrap.min.css';
import './assets/css/animate.min.css';
import './assets/sass/light-bootstrap-dashboard.css';
import './assets/css/demo.css';
import './assets/css/pe-icon-7-stroke.css';




ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route path="/" name="Home" component={App}/>
        </Switch>
    </BrowserRouter>
),document.getElementById('root'));
