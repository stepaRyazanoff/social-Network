import './css/App.css'
import {Route, Routes} from 'react-router-dom'
import UsersContainer from "./components/Users/UsersContainer"
import HeaderContainer from "./components/Header/HeaderContainer"
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import ProfileContainer from "./components/Profile/ProfileContainer"
import LoginContainer from "./components/Login/LoginContainer"
import NavbarContainer from "./components/Navbar/NavbarContainer"
import {connect} from "react-redux"
import Preloader from "./components/common/Preloader/Preloader"
import {getInitialize} from "./redux/appReducer"
import React from "react"
import {compose} from "redux"
import {withRouter} from "./hoc/withRouter"

class App extends React.Component {

    componentDidMount() {
        this.props.getInitialize()
    }

    render() {
        return (
            <>
                {!this.props.initialized
                    ? <Preloader/>
                    : <div className='App'>
                        <div className='container'>
                            <HeaderContainer/>
                            <div className='wrapper'>
                                <NavbarContainer/>
                                <main className='main'>
                                    <Routes>
                                        <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                                        <Route path='/profile/:profileId?' element={<ProfileContainer/>}/>
                                        <Route path='/users' element={<UsersContainer/>}/>
                                        <Route path='/login' element={<LoginContainer/>}/>
                                    </Routes>
                                </main>
                            </div>
                        </div>
                    </div>
                }
            </>
        )
    }
}

const mapStateToProps = state => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        {
            getInitialize,
        }))(App)
