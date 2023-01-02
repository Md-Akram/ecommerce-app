import { Products } from "../../products"
import { Product } from "./product"
import './shop.css'

export const Shop = () => {
    return (
        <div className="shop">
            <div className="products">
                {Products.map(product => <Product data={product} />)}
            </div>
        </div>
    )
}