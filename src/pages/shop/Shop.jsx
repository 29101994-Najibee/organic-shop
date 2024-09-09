import { PRODUCTS } from "../../data/products"
import { Product } from "./Product"

const Shop=()=>{
return(
<>
<h1>product shop Pagina </h1>
<div className="row">
    {PRODUCTS.map((productDate)=>{
       return <Product key={productDate.id} data={productDate}/>
    })}

</div>
</>
)
}
export default Shop