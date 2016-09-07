import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import '../less/app.less';
import App from './conteiners/App';
import HomePage from './conteiners/Home';
import ProfilePage from './conteiners/Profile';

import configureStore from './store';

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

injectTapEventPlugin();

ReactDOM.render(
    <Provider store={ store }>
        <Router history={ history }>
            <Route component={ App }>
                <Route path="/" component={ HomePage } />
                <Route path="profile" component={ ProfilePage } />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('App')
);
