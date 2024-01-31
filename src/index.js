import {rerenderEntireApp} from "./render";
import state, {addPost, updatePostText} from './redux/state'

rerenderEntireApp(state, addPost, updatePostText)


