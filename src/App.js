import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Nav from './components/Nav/nav';
import Profile from './components/Profile/profile';
import Messages from './components/Messages/messages';
import Settings from './components/Settings/settings';
import Music from './components/Music/music';
import News from './components/News/news';
import Footer from './components/Footer/footer';

const App = () => {
    return (
        <div className='app-wrapper'>
         <Header />
         <Nav />
         <div className='app-content'>
           <Profile />
           <Messages />
           <News />
           <Music />
           <Settings />
         </div>
         <Footer />
        </div>
      );
}

export default App;
