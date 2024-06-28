import React, { useEffect } from 'react'
import Post from './Post'
import classes from './PostList.module.css'
import NewPost from '../routes/NewPost'
import { useState } from 'react';
import Modal from './Modal';
import { useLoaderData } from 'react-router-dom'; 

export default function PostList() {
    const posts = useLoaderData();

   
  return (
    <>
    {/*modalIsVisible ? <Modal onClose={hideModalHandler}>
        <NewPost 
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
        />
    </Modal> : null*/}

    


    {posts.length > 0 && (
        <ul className={classes.posts}>
        {posts.map((value,index) => {
            return <Post key={index} id={value.id} author={value.author} body={value.body}/>
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
