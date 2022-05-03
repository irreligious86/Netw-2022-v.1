import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import state from './Redux/state';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App 
      dialogsData={state.dialogsData}
      messagesData={state.messagesData}
      postsData={state.postsData}
      />
  </React.StrictMode>
);
