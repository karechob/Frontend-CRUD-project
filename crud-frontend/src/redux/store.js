import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import axios from 'axios'
import { createLogger } from 'redux-logger'
import { thunkMiddleware } from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './root-reducer'

const logger = createLogger({ collapsed: true })

const middleware = [...getDefaultMiddleware(), thunkMiddleware.withExtraArgument({ axios }), logger];

const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: composeWithDevTools()
  });

export default store;