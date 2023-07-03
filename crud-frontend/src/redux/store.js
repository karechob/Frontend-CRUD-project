import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import axios from 'axios'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk' // Import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './root-reducer'
import { applyMiddleware } from "redux";

const logger = createLogger({ collapsed: true })

const middleware = [...getDefaultMiddleware(), thunk.withExtraArgument({ axios }), logger];
// Use thunk.withExtraArgument

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: composeWithDevTools()
});

export default store;
