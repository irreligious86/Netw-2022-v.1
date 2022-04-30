import React from 'react';
import classes from './messages.module.css';
import Dialogs from './Dialogs/dialogs';

const Messages = (props) => {
  return (
    <div className={classes.messages}>
      Messages
      <Dialogs />
    </div>
  )
}

export default Messages;