import { useContext } from "react"
import { ShopContext } from "../../context/shop-context"
import { Products } from "../../products"
import { CartItem } from "./cartItem"
import './cart.css'

export const Cart = () => {
    const { cartItems } = useContext(ShopContext)
    return (
        <div className="cart">
            <div className="heading">
                <h1>Your Cart</h1>
            </div>
            <div className="cartItems">
                {Products.map(product => cartItems[product.id] > 0 && <CartItem data={product} />)}
            </div>
        </div>
    )
}