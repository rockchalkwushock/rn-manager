import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

const middlewares = [thunk]
const enhancers = compose(applyMiddleware(...middlewares))

const store = createStore(reducers, {}, enhancers)

export default store
