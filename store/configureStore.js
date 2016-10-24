import createLogger from 'redux-logger'
import freeze from 'redux-freeze'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

export default function configureStore(initialState) {

    let middleware = [thunk]

    // Apply development specific middleware
    if (__DEV__) {
        middleware = [
            ...middleware,
            createLogger(),
            freeze
        ]
    }

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware)
    )

    return store
}
