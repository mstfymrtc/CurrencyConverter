//TODO: 'STORE MAKES EVERYTHING TOGETHER*

import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
  //TODO:logger, middleware'e en son push edilen arguman olmalı always.
}

const store = createStore(reducer, applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga);

export default store;
