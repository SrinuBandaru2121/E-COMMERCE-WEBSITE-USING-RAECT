import React from 'react'
import styles from "./ecommerce.module.css"
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className={styles.nav}>
      <article className={styles.left}>logo</article>
       <article className={styles.right}>
          <NavLink to= "/">Products</NavLink>
          <NavLink to= "/cart">Cart</NavLink>
          <NavLink to= "/order">Order</NavLink>
          <NavLink to= "/checkout">Checkout</NavLink> 
       </article>
    </div>
  )
}
export default Navbar