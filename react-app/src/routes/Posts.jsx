
import { useState } from 'react'
import PostList from '../components/PostList'
import { Outlet } from 'react-router-dom'


// app artik posts oldu
function Posts() {
  


  return (
    <>
      <Outlet />
      <main>
        <PostList/>
      </main>
    </>
  )
}

export default Posts

export async function loader(){
  const response = await fetch('http://localhost:8080/posts',{
      method: 'GET',
  });
  const data = await response.json();

  return data.posts;
}