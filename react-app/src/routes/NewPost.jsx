
import classes from '../components/NewPost.module.css';
import Modal from '../components/Modal';
import { Link,Form,redirect } from 'react-router-dom';

function NewPost() {
    
  

    // Lifting state up
  return (
    <Modal>
      <Form className={classes.form} method='post'>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required name='body' rows={3}/>
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name='author' required/>
        </p>
        <p className={classes.actions}>
          <Link type='button' to='/'>Cancel</Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
    );
}

export default NewPost;

// data -> request -> .. // oto geliyor bilgiler Form tanımlandı
export async function action({request}){
  console.log('we21e')
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);  // {body:'...',author:'...'}

  await fetch('http://localhost:8080/posts',{
    method:'POST',
    body: JSON.stringify(postData),
    headers: {
        'Content-Type':'application/json'
    }
  });

  return redirect('/');
}