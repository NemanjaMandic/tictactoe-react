import React from 'react';
import { Route, IndexRoute } from 'react-router';

const createRoutes = () => {
	return(
		<Route
			path="/"
			component={ Template }
		></Route>
	);
}