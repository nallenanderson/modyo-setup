import React from 'react';
import { Router, Route, browserHistory, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import Setup from './components/setup';
import Profile from './components/profile';
import Tutorials from './components/tutorials';
import Custom from './components/custom';
import Users from './components/users';
import Teams from './components/teams';
import Channels from './components/channels';
import Import from './components/import';
import NotFound from './components/not-found';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

var Routes = (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} >
      <Route path="/" component={App}>
        <IndexRoute component={Setup} />
        <Route path="profile" component={Profile} />
        <Route path="tutorials" component={Tutorials} />
        <Route path="custom" component={Custom} />
        <Route path="users" component={Users} />
        <Route path="teams" component={Teams} />
        <Route path="channels" component={Channels} />
        <Route path="import" component={Import} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>
);

export default Routes;
