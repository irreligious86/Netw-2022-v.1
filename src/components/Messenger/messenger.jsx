import React from 'react';
import classes from './messenger.module.css';
import Dialogs from './Dialogs/dialogs';

const Messenger = (props) => {
  return (
    <div className={classes.messenger}>
      Messenger
      <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData} />
    </div>
  )
}

export default Messenger;