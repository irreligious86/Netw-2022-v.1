import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './nav.module.css';

const Nav = (props) => {
  return (
    <div className={classes.nav}>
      <ul className={classes['nav-list']}>
        <li className={classes['nav-list-item']}>
          <NavLink to="/profile" className={classes['nav-link']}>
            Profile
          </NavLink>
        </li>
        <li className={classes['nav-list-item']}>
          <NavLink to="/messages" className={classes['nav-link']}>
            Messages
          </NavLink>
        </li>
        <li className={classes['nav-list-item']}>
          <NavLink to="/news" className={classes['nav-link']}>
            News
          </NavLink>
        </li>
        <li className={classes['nav-list-item']}>
          <NavLink to="/music" className={classes['nav-link']}>
            Music
          </NavLink>
        </li>
        <li className={classes['nav-list-item']}>
          <NavLink to="/settings" className={classes['nav-link']}>
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Nav;