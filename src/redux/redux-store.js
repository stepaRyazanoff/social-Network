import {combineReducers, legacy_createStore as createStore} from "redux"
import {profileReducer} from "./profileReducer"
import {dialogsReducer} from "./dialogsReducer"


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
})
const store = createStore(reducers)

window.state = store

export default store