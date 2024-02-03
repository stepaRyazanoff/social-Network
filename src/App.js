import './css/App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import {Route, Routes} from 'react-router-dom'
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App({store}) {
    return (
        <div className='App'>
            <div className='container'>
                <Header/>
                <div className='wrapper'>
                    <Navbar/>
                    <main className='main'>
                        <Routes>
                            <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                            <Route path='/profile' element={<Profile/>}/>
                        </Routes>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default App
