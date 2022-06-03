import AsyncStorage from "@react-native-async-storage/async-storage";
import { spawn } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
import { persistReducer, persistStore } from "redux-persist";
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { reducer } from "../reducers/logInReducer";
import { watchLogin } from "../actions/logInActions";

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield spawn(watchLogin);
}

const rootReducer = combineReducers({
  loginReducer: reducer,
});

const persistConfig = {
  key: "root",
  whitelist: ["loginReducer"],
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware)
);

export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);