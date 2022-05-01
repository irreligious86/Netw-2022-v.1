import React from 'react';
import classes from './dialogs.module.css';
import DialogItem from './DialogItem/dialog-item';
import Message from './Message/message';

const Dialogs = (props) => {
  return (
    <div className={classes['dialogs']}>
      <div className={classes['dialogs-items']}>
        <h5 className={classes['dialogs-items-title']}>Dialog items</h5>
      <DialogItem name="Alex" id="1" />
      <DialogItem name="John" id="2" />
      <DialogItem name="Bill" id="3" />
      <DialogItem name="Victor" id="4" />
      <DialogItem name="Vallery" id="5" />
      <DialogItem name="Ondrei" id="6" />
      <DialogItem name="Andrew" id="7" />
      <DialogItem name="Moisha" id="8" />
      </div>
      <div className={classes['messages']}>
        <h5 className={classes['messages-title']}>Messages</h5>
        <Message message="Hi" />
        <Message message="How are you?" />
        <Message message="Hello world!" />
        <Message message="Good" />
        <Message message="You!" />
      </div>
    </div>
  )
}

export default Dialogs;