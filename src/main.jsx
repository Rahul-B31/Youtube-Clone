import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './util/store.js'

import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Watch from './components/watch/Watch.jsx'
import Feed from './components/Feed/Feed.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Feed/>
      },
      {
         path:'/watch',
         element:<Watch/>

      }
    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={store}>
       <RouterProvider  router={router}/>
    </Provider>

)
