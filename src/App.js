import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Nav from './components/Nav/nav';
import Profile from './components/Profile/profile';
import Messenger from './components/Messenger/messenger';
import Settings from './components/Settings/settings';
import Music from './components/Music/music';
import News from './components/News/news';
import Footer from './components/Footer/footer';
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = (props) => {
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
         <Header />
         <Nav />
         <div className='app-content'>
           <Routes>
             <Route path="/profile" element={<Profile postsData={props.postsData}/>} />
             <Route path="/messenger" element={<Messenger dialogsData={props.dialogsData} messagesData={props.messagesData} />} />
             <Route path="/news" element={<News/>}/>
             <Route path="/music" element={<Music/>}/>
             <Route path="/settings" element={<Settings/>}/>
           </Routes>
         </div>
         <Footer />
        </div>
      </BrowserRouter>
      );
}

export default App;
