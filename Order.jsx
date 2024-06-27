import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Order = () => {
  let [state,setState]=useState(null);
  let [count,setCount]=useState(1);
  let {id}=useParams();
   useEffect(()=>{
       axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
        setState(res.data)
       }).catch(()=>{
           console.log("loading")
       })
   },[])
   let handleChange1=()=>{
       setCount(count+1)
   }
   let handleChange2=()=>{
    if(count<=1){ 
    }
    else{
    setCount(count-1)
    }
}
let totalprice=()=>{
  return count*state.price
}
  return (
    <div>
       {state==null?"nothing":(<div key={state.id}>
        <p>{state.title}</p>
        <p>{state.categotry}</p>
        <p>price-{state.price}</p> 
        <p>totalprice-{totalprice()}</p>
        <Link to={`/checkout/${state.id}`}>go to checkout</Link>
        <Link to={`/cart/${state.id}`}>go to cart</Link>
        <button onClick={handleChange1}>+</button>{count}
        <button onClick={handleChange2}>-</button>
       </div>)}

    </div>
  )
}

export default Order