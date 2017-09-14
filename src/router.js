import React from 'react';
import {
	Router,
	Route,
	IndexRoute,
	DefaultRoute
} from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import Example from './routes/Example';
import LoginPage from './routes/LoginPage';

import MainLayout from './components/MainLayout';
import MapComponent from './components/MapComponent';
import AudioPlayer from './components/AudioPlayer';
import AudioPlaylist from './components/AudioPlaylist';
import Users from "./routes/Users.js";

function RouterConfig({
	history
}) {
	return (
		<Router history={history}>
      <Route path="/" component={MainLayout} >
      	<IndexRoute component={Products}/>
      	<Route path="/example" component={Example} />
      	<Route path="/player" component={AudioPlayer} />
      	<Route path="/playerlist" component={AudioPlaylist} />
      	<Route path="/products" component={Products} />
		<Route path="/map" component={MapComponent} />
      </Route>
      
		
      <Route path="/users" component={Users} />
    </Router>
	);
}

export default RouterConfig;