//tao store tu createStore
import {createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import {browserHistory} from 'react-router'
import {routerMiddleware} from 'react-router-redux'
import rootReducer from './reducers/index'
import thunk from 'redux-thunk'
const logger = createLogger()
const router = routerMiddleware(browserHistory)
const createStoreWithMiddleware = applyMiddleware(thunk, router, logger)(createStore)

export function configureStore(initialState){
    return createStoreWithMiddleware(rootReducer, initialState)
}


// export default createStore(
//     rootReducer,
//     applyMiddleware(thunk)
// )
