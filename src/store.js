import { createStore, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import combinedReducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'localforage'

// Browser history
let history = createHistory()

var middlewares = [
	routerMiddleware(history), // history middleware
	thunk // async actions middleware
]

if (process.env.NODE_ENV !== 'production') {
	middlewares = [...middlewares, logger] // logging for non-production environments
}

// Redux store
const store = createStore(
	persistReducer(
		{
			key: 'ashi',
			storage: storage
		},
		combinedReducers
	), // Store persistance reducer

	composeWithDevTools({})(applyMiddleware(...middlewares)) // Dev tools support
)

// Store persistor
let persistor = persistStore(store)

// TODO: Use below line only to clear persisted storage
persistor.purge()

export { history, store, persistor }
