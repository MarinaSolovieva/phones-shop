import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import phonesReducer from "./phonesReducer";
import phonesPageReducer from "./phonesPageReducer";

const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    phones: phonesReducer,
    phonesPage: phonesPageReducer
})
export default createRootReducer