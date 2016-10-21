import createLogger from 'redux-logger'
import rootReducer from '../reducers'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

export default function configureStore(initialState) {

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunkMiddleware, createLogger())
    )

    return store
}
