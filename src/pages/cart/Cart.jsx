import { useContext, useState } from "react"
import { PRODUCTS } from "../../data/products"
import { ShopContext } from "../../context/ShopContext"
import { Product } from "../shop/Product"
import { Link } from "react-router-dom"


const Cart=()=>{

    const {cartItems}= useContext(ShopContext)
    const isCartEmpty = cartItems.length === 0;

    return(
        <div>
            {isCartEmpty ? (
                <div>
                    <h1>Je Organic-winkelwagen is leeg</h1>
                    <Link to="/">Doorgaan waar je gebleven bent</Link>
                </div>
            ) : (
                <>
                    <h1>Je Organic-winkelwagen</h1>
                    <div className="row">
                        {PRODUCTS.map((p) => {
                            if (cartItems?.some((i) => i.id === p.id && i.count > 0)) {
                                return <Product key={p.id} data={p} />; // Voeg de `key`-prop toe hier
                            }
                            return null; // Return null if the product is not in the cart
                        })}
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;