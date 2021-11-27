// объединяя reducer-ы с помощью combineReducers,
import {applyMiddleware, combineReducers, createStore} from "redux";
import { testReducer } from "./testReducer";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
    test: testReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;