import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost({onClose,onBodyChange,onAuthorChange,onAddPost}) {
    const [enteredBody,setEnteredBody] = useState('');
    const [enteredAuthor,setEnteredAuthor] = useState('');

    const bodyChangeHandler = (event) => {
        setEnteredBody(event.target.value);
    }

    const authorChangeHandler = (event) => {
        setEnteredAuthor(event.target.value);
    }



    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(enteredAuthor,enteredBody)

        const postData = {
            body:enteredBody,
            author:enteredAuthor
        };

        onAddPost(postData);
        onClose();
    }


    // Lifting state up
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler}/>
      </p>
      <p className={classes.actions}>
        <button type='button' onClick={onClose}>Cancel</button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}

export default NewPost;