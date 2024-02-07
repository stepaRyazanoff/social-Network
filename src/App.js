import './css/App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import {Route, Routes} from 'react-router-dom'
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App() {
    return (
        <div className='App'>
            <div className='container'>
                <Header/>
                <div className='wrapper'>
                    <Navbar/>
                    <main className='main'>
                        <Routes>
                            <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                            <Route path='/profile/:profileId?' element={<ProfileContainer/>}/>
                            <Route path='/users' element={<UsersContainer/>}/>
                        </Routes>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default App
