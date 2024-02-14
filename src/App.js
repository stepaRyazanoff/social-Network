import './css/App.css'
import {Route, Routes} from 'react-router-dom'
import UsersContainer from "./components/Users/UsersContainer"
import HeaderContainer from "./components/Header/HeaderContainer"
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import ProfileContainer from "./components/Profile/ProfileContainer"
import LoginContainer from "./components/Login/LoginContainer"
import NavbarContainer from "./components/Navbar/NavbarContainer"

function App() {
    return (
        <div className='App'>
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
    )
}

export default App
