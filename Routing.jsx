import React from 'react'
import Layout from './Layout'
import Products from './Products'
import Order from './Order'
import Checkout from './Checkout'
import Cart from './Cart'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
    let route=createBrowserRouter([
        {
         path:"/",
         element:<Layout/>,
        
        children:[
           {
            index:true,
            element:<Products/>
           },
           {
            path:"/cart",
            element:<Cart/>
           },
           {
            path:"/cart/:id",
            element:<Cart/>
           },
           {
            path:"/order/:id",
            element:<Order/>
           },
           {
            path:"/order",
            element:<Order/>
           },
           {
            path:"/checkout/:id",
            element:<Checkout/>
           },
           {
            path:"/checkout",
            element:<Checkout/>
           }
        ]
      }
    ])

const Routing = () => {
  return (
     <RouterProvider router={route}></RouterProvider>
  )
}

export default Routing