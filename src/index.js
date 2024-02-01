import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import './css/index.css'
import App from './App'
import store from "./redux/state";
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
const rerenderEntireApp = () => {
    const state = store.getState()
    const dispatch = store.dispatch.bind(store)
    root.render(
        <BrowserRouter>
            <App state={state} dispatch={dispatch}/>
        </BrowserRouter>
    )
}

rerenderEntireApp(store.getState())
store.subscribe(rerenderEntireApp)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()


