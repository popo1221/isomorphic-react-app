// routes.jsx
var ReactRouter = require('react-router'),
	Route = ReactRouter.Route;
var DemoApp = require('../components/Demo.jsx');

var routes = (
	<Route handler={DemoApp}>
		<Route path="/abc" handler={DemoApp} />
	</Route>
);

module.exports = routes;