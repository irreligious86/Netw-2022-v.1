import React from 'react';
import classes from './nav.module.css';

const Nav = (props) => {
  return (
    <div className={classes.nav}>
      <ul className={classes['nav-list']}>
        <li className="nav-list-item">
          
          Profile
        </li>
        <li className="nav-list-item">
          
          Messages
        </li>
        <li className="nav-list-item">
          
          News
        </li>
        <li className="nav-list-item">
          
          Music
        </li>
        <li className="nav-list-item">
          
          Settings
        </li>
      </ul>
    </div>
  )
}

export default Nav;