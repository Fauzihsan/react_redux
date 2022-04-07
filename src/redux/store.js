// import { createStore, applyMiddleware } from "redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import todoReducer from "./todoSlice";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
const reducers = combineReducers({
  todo: todoReducer,
});
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({ reducer: persistedReducer, middleware: [thunk] });
// const store = createStore(persistedReducer, applyMiddleware());
const persistor = persistStore(store);
export { store, persistor };
