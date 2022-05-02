import React from 'react';
import classes from './post.module.css';

const Post = (props) => {
  return (
    <div className={classes['post']}>
      <h5 className={classes['post-title']}>Post title</h5>
      <div className={classes['post-author-ava']}></div>
      <p>{props.message}</p>
      <p>Like: {props.likeCount}</p>
    </div>
  )
}

export default Post;