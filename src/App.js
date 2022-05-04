import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Nav from './components/Nav/nav';
import Profile from './components/Profile/profile';
import Dialogs from './components/Dialogs/dialogs';
import Settings from './components/Settings/settings';
import Music from './components/Music/music';
import News from './components/News/news';
import Footer from './components/Footer/footer';
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = (props) => {
  console.log(props);
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
         <Header />
         <Nav />
         <div className='app-content'>
           <Routes>
             <Route 
               path="/profile" 
               element={<Profile profilePage={props.state.profilePage} />}
            />
             <Route 
               path="/dialogs" 
               element={<Dialogs dialogsPage={props.state.dialogsPage} />}
             />
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
