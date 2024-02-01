import './css/App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import {Route, Routes} from 'react-router-dom'

function App({state: {profilePage: {posts, postText}, dialogsPage: {dialogs, messages, messageText}}, dispatch}) {
    return (
        <div className='App'>
            <div className='container'>
                <Header/>
                <div className='wrapper'>
                    <Navbar/>
                    <main className='main'>
                        <Routes>
                            <Route path='/dialogs/*'
                                   element={<Dialogs dialogs={dialogs}
                                                     messageText={messageText}
                                                     dispatch={dispatch}
                                                     messages={messages}/>}/>
                            <Route path='/profile'
                                   element={<Profile posts={posts}
                                                     dispatch={dispatch}
                                                     postText={postText}/>}/>
                        </Routes>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default App
