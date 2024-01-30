import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import {Route, Routes} from 'react-router-dom'

function App({state: {profilePage: {posts}, messagesPage: {dialogs, messages}}}) {
    return (
        <div className='App'>
            <div className='container'>
                <Header/>
                <div className='wrapper'>
                    <Navbar/>
                    <main className='main'>
                        <Routes>
                            <Route path='/dialogs/*' element={<Dialogs dialogs={dialogs} messages={messages}/>}/>
                            <Route path='/profile' element={<Profile posts={posts}/>}/>
                        </Routes>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default App
