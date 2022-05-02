import React from 'react';
import classes from './my-posts.module.css';
import Post from './Post/post';

const MyPosts = (props) => {
  return (
    <div className="my-posts">
      <h5 className={classes['my-posts-title']}>My posts</h5>
      <div className={classes["input-text"]}>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
      <div className={classes["input-controls"]}>
        <button type='button'>Add post</button>
        <button type='button'>Clean</button>
      </div>
      <Post message="Hello wrld!" likeCount="2" />
      <Post message="Hello wrld!" likeCount="0" />
      <Post message="Hello wrld!" likeCount="6" />
      <Post message="Hello wrld!" likeCount="1" />
      <Post message="Hello wrld!" likeCount="2" />
    </div>
  )
}

export default MyPosts;