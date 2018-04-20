import React, { Component } from 'react'
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'
import Levels from './Levels'
import Level from './Level'
import 'aframe'

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/level/:level" component={Level} />
					<Route path="/" exact component={Levels} />
					<Redirect to="/" />
				</Switch>
			</BrowserRouter>
		)
	}
}
