import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts,{loader as postsLoader} from './routes/Posts.jsx'
import './index.css'
import { RouterProvider,createBrowserRouter} from 'react-router-dom'
import RootLayout from './routes/RootLayout.jsx'
import NewPost,{action as newPostAction} from './routes/NewPost.jsx'
import PostDetails from './routes/PostDetails.jsx'
import { loader as postDetailsLoader } from './routes/PostDetails.jsx'

// loader onceden yuklemeyi saglar gerekli bilgi varsa -- action hangi route'u ilgilendiriyorsa oraya yazilir
const router = createBrowserRouter([
  {
    path:'/',element:<RootLayout />,
    children:[
      {
        path:'/',
        element:<Posts />,
        loader:postsLoader,
        children:[
          {path: '/create-post',element:<NewPost />,action:newPostAction},
          {path:'/:id',element:<PostDetails />,loader:postDetailsLoader}
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  
  </React.StrictMode>,
)
