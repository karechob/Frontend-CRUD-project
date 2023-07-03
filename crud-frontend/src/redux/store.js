import {applyMiddleware, createStore} from 'redux'
import axios from 'axios'
import {createLogger} from 'redux-logger'
import {ThunkMiddleware} from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './root-reducer'

