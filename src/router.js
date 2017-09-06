import React from 'react';
import {
	Router,
	Route
} from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import Example from './routes/Example';
import LoginPage from './routes/LoginPage';

import MainLayout from './components/MainLayout';

import Users from "./routes/Users.js";

function RouterConfig({
	history
}) {
	return (
		<Router history={history}>
      <Route path="/" component={MainLayout} >
		
      </Route>
      <Route path="/products" component={Products} />
		<Route path="/example" component={Example} />
      <Route path="/users" component={Users} />
    </Router>
	);
}

export default RouterConfig;