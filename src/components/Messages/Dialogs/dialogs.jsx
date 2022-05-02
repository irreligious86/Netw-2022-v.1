import React from 'react';
import classes from './dialogs.module.css';
import DialogItem from './DialogItem/dialog-item';
import Message from './Message/message';

const dialogsData = [
  {id: 1, name: "Alex" },
  {id: 2, name: "John" },
  {id: 3, name: "Bill" },
  {id: 4, name: "Victor" },
  {id: 5, name: "Vallery" },
  {id: 6, name: "Ondrei" },
  {id: 7, name: "Andrew" },
  {id: 8, name: "Moisha"}
];

const messagesData = [
  {id: 1, message: "Hi"},
  {id: 2, message: "How are you?"},
  {id: 3, message: "Hello world!"},
  {id: 4, message: "You!"},
  {id: 5, message: "Good"},
  {id: 6, message: "You!"},  
];

const dialogsElements = dialogsData
.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);

const messagesElements = messagesData
.map( msg => <Message id={msg.id} message={msg.message} /> );

const Dialogs = (props) => {
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