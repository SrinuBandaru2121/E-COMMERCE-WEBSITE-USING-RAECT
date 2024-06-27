import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom';
const Products = () => {
  let [state,setState]=useState([]);
  useEffect(()=>{
     axios.get("https://fakestoreapi.com/products/").then(res=>{setState(res.data)})
     .catch(()=>{
      console.log("loading....")
     })
  },[])
  return(
    <div>
       {state.map((data)=>{
        return <div  key={data.id}>
          <p>{data.title}</p>
          <p>{data.category}</p>
          <p>{data.price}</p>
          <img src={data.image} alt="" />
          <Link  to={`/cart/${data.id}`}> go to cart</Link>
          </div>
       })
      }

    </div>
  )
}

export default Products;
