import {combineReducers, legacy_createStore as createStore} from "redux"
import {profileReducer} from "./profileReducer"
import {dialogsReducer} from "./dialogsReducer"
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
})
const store = createStore(reducers)

window.state = store

export default store