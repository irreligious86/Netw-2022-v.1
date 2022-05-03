import React from 'react';
import classes from './dialogs.module.css';
import DialogItem from './DialogItem/dialog-item';
import Message from './Message/message';

const Dialogs = (props) => {

  const dialogsElements = props.dialogsData
  .map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);
  
  const messagesElements = props.messagesData
  .map( msg => <Message id={msg.id} message={msg.message} /> );

  return (
    <div className={classes['dialogs']}>
      <div className={classes['dialogs-items']}>
        <h5 className={classes['dialogs-items-title']}>Dialog items</h5>
        {dialogsElements}
      </div>
      <div className={classes['messages']}>
        <h5 className={classes['messages-title']}>Messages</h5>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs;