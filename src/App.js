import './css/App.css'
import Navbar from './components/Navbar/Navbar'
import {Route, Routes} from 'react-router-dom'
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";

function App() {
    return (
        <div className='App'>
            <div className='container'>
                <HeaderContainer/>
                <div className='wrapper'>
                    <Navbar/>
                    <main className='main'>
                        <Routes>
                            <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                            <Route path='/profile/:profileId?' element={<ProfileContainer/>}/>
                            <Route path='/users' element={<UsersContainer/>}/>
                            <Route path='/login' element={<Login/>}/>
                        </Routes>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default App
