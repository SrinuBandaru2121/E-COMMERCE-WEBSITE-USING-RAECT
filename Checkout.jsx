import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Checkout = () => {
  let [state,setState]=useState(null);
  let {id}=useParams();
   useEffect(()=>{
       axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
        setState(res.data)
       }).catch(()=>{
           console.log("loading")
       })
   },[])
  return (
    <div>
       {state==null?"nothing":(<div key={state.id}>
        <p>order name{state.title}</p>
        <p>{state.categotry}</p>
       <p>orderid {state.id}</p>
       <input type="text" />
        <h1>order is placed</h1>
        <Link  to={`/order/${state.id}`}>go back to order</Link>
       
       </div>)}

    </div>
  )
}
export default Checkout;