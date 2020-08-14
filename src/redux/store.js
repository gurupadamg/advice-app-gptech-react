import {createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger'
import adviceReducer from './advice/adviceReducer'


const store = createStore(adviceReducer, composeWithDevTools(applyMiddleware(thunk, logger)) )

export default store
