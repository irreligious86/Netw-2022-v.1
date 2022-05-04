import React from 'react';
import classes from './profile.module.css';
import ProfileInfo from './ProfileInfo/profile-info';
import MyPosts from './MyPosts/my-posts';

const Profile = (props) => {
  console.log(props);
  return (
    <div className={classes['profile']}>
      <h5 className={classes['profile-title']}>Profile</h5>
      <ProfileInfo />
      <MyPosts postsData={props.profilePage.postsData} />
    </div>
  )
}

export default Profile;