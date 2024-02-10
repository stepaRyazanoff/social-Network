import {
    applyMiddleware,
    combineReducers,
    legacy_createStore as createStore
} from "redux"
import {profileReducer} from "./profileReducer"
import {dialogsReducer} from "./dialogsReducer"
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import {thunk} from "redux-thunk";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

window.state = store

export default store