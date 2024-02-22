if (process.env.APP_ENV) {
	console.log("Environment: " + process.env.APP_ENV)
}

if (process.env.APP_DEBUG) {
	console.log("Debug enabled")
	// Must be the first import
	import("preact/debug").then((module) => {
		console.log("'preact/debug' module loaded")	
	}).catch((error) => {
		console.error('Error loading module', error)
	})
}

import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';
import './style.scss';

import { Header } from './components/Header.jsx';
import { Home } from './pages/Home/index.jsx';
import { Login } from './pages/Auth/Login.jsx';
import { Register } from './pages/Auth/Register.jsx';
import { NotFound } from './pages/_404.jsx';
import './style.css';
import Logger from './library/Logger.js'
import Container  from 'react-bootstrap/Container'

export function App() {
	Logger.debug('App started (this message ONLY appears when debug is enabled)')
	return (
		<LocationProvider>
			<Header user={null} />
			<main>
				<Container>
					<Router>
						<Route path="/" component={Home} />
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
						<Route default component={NotFound} />
					</Router>
				</Container>
			</main>
		</LocationProvider>
	);
}

render(<App />, document.getElementById('app'));
