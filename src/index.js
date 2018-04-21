import React from 'react'
import ReactDOM from 'react-dom'
import { Theme } from './utils'
import { store, history } from './store'
import { Provider } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import registerServiceWorker from './registerServiceWorker'
import { ThemeProvider } from 'styled-components'
import Level from './Level'
import Levels from './Levels'

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<ThemeProvider theme={Theme}>
				<Switch>
					<Route path="/level/:level" component={Level} />
					<Route path="/" exact component={Levels} />
					<Redirect to="/" />
				</Switch>
			</ThemeProvider>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
)

registerServiceWorker()
