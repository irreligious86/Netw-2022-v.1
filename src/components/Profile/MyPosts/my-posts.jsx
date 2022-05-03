import React from 'react';
import classes from './my-posts.module.css';
import Post from './Post/post';

const MyPosts = (props) => {

  const postsElements = props.postsData
  .map( post => <Post message={post.message} likesCount={post.likesCount} /> );

  const addPost = (props) => {
    const text = newPostElement.current.value;
    alert(text);
  }

  const newPostElement = React.createRef();

  return (
    <div className="my-posts">
      <h5 className={classes['my-posts-title']}>My posts</h5>
      <div className={classes["input-text"]}>
        <textarea 
          name="" 
          id="" 
          cols="60" 
          rows="3"
          ref={newPostElement}
        ></textarea>
      </div>
      <div className={classes["input-controls"]}>
        <button type='button' onClick={ () => addPost() }>Add post</button>
        <button type='button' onClick={ () => {alert('Clean')} }>Clean</button>
      </div>
      {postsElements}
    </div>
  )
}

export default MyPosts;