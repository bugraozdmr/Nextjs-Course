import React from 'react'
import Post from './Post'
import classes from './PostList.module.css'
import NewPost from './NewPost'
import { useState } from 'react';
import Modal from './Modal';

export default function PostList({isPosting,onStopPosting}) {
    
    const [posts,setPosts] = useState([]);

    const addPostHandler = (postData) => {
        // better way he says
        setPosts((existingPosts) => [postData,...existingPosts]);
    }
    

  return (
    <>
    {/*modalIsVisible ? <Modal onClose={hideModalHandler}>
        <NewPost 
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
        />
    </Modal> : null*/}

    {isPosting && <Modal onClose={onStopPosting}>
        <NewPost 
            onClose={onStopPosting}
            onAddPost = {addPostHandler}
        />
    </Modal>}


    {posts.length > 0 && (
        <ul className={classes.posts}>
        {posts.map((value,index) => {
            return <Post key={index} author={value.author} body={value.body}/>
        })}
    </ul>
    )}

    {posts.length === 0 && (
        <div style={{textAlign:'center',color:'white'}}>
            <h2>No posts yet.</h2>
            <p>Start adding some!</p>
        </div>
    )}
    </>
  )
}
