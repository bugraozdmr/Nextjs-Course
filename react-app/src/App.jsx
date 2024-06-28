
import { useState } from 'react'
import './App.css'
import MainHeader from './components/MainHeader'
import PostList from './components/PostList'

function App() {
  const [modalIsVisible,setModalIsVisible] = useState(false);


  const hideModalHandler = () => {
    setModalIsVisible(false);
  }

  const showModalHandler = () => {
    setModalIsVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler}/>
      <main>
        <PostList isPosting={modalIsVisible} onStopPosting={hideModalHandler}/>
      </main>
    </>
  )
}

export default App
