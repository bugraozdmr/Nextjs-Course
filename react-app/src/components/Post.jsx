import React from 'react'
import classes from './Post.module.css'

export default function Post(props) {
  return (
    
    <li className={classes.post}>
        <p className={classes.author}>{props.author}</p>
        <p className={classes.body}>{props.body}</p>
    </li>
  )
}
