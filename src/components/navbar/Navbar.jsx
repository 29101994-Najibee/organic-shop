import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from 'react'
import { ShopContext } from '../../context/ShopContext'

const Navbar=()=>{
  const {cartItems}= useContext(ShopContext)
  const itemCart = cartItems?.reduce((perv , current)=>{
    return perv + current.count
  } , 0)
    return(
    <>
   <div className="navbar navbar-dark bg-warning navbar-expand-lg ">
<div className="container">
    <a className="navbar-brand text-bold text-dark">Organic Shop</a>
    <ul className="navbar-nav">
        <li className="nav-item me-auto">
            <Link to='/' className='nav-link text-dark' >Shop</Link> 
        </li>
        <li className="nav-item">
        <Link to='/cart' className='nav-link text-dark' >
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="badge badge-pill bg-danger position-absolute mt-2 m-3 translate-middle">{itemCart}</span>
        </Link> 
        </li>
    </ul>
</div>
    </div>
    </>
    )
    }
    export default Navbar