import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { addPost, updateNewPostText } from './Redux/state';
import App from './App';
import {BrowserRouter} from "react-router-dom"; 
import { subscribe } from './Redux/state';

// import { rerenderEntireTree }  from './render';
import state from './Redux/state.js';

const rerenderEntireTree = () => {

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App 
          state={state} 
          addPost={addPost}
          updateNewPostText={updateNewPostText}/>
    </BrowserRouter>
  );

};
 

rerenderEntireTree(state);

subscribe(rerenderEntireTree);