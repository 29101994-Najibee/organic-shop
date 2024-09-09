import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

function Product(props) {
    //als je wilt een property of een function in meerdere paginas gebruiken dan is het beter om van useContext gebruik maken.
    //als je wilt een varibal zonder refresh te hebben je kan gebruiken van een State.
    //als je wilt steeds geen props aanroepen voor eleke property je kan van deze manier gebruik maken
    const {id , productName , productImage ,price , description } = props.data;
    const {cartItems, handleIncreaseItem, handleDecreaseItem,handleRemoveItems
    } =useContext(ShopContext)
    const isIncart = cartItems?.some((item)=>item.id ===id)
  return (
    
    <div className="col-3">
        <img src={productImage} className='w-100'/>
       <h5>{productName}</h5>
       <p>Prijs:{price}€</p>
       <div className="col">
       <button className='btn btn-warning btn-sm' onClick={()=>handleIncreaseItem(id)}>+</button>
       <span className='mx-2'>{cartItems?.find((row) => row.id === id)?.count || 0}</span>
       {
        isIncart && <button className='btn btn-warning btn-sm' onClick={()=>handleDecreaseItem(id)}>-</button>}
       </div>
       <button className='btn btn-danger btn-sm mt-2' onClick={() => handleRemoveItems(id)}>Remove</button>
    </div>
  )
}

export { Product };
