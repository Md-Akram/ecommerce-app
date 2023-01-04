import { useContext } from "react"
import { ShopContext } from "../../context/shop-context"
import { Products } from "../../products"
import { CartItem } from "./cartItem"
import './cart.css'
import { useNavigate } from "react-router-dom"

export const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext)
    const totalAmount = getTotalCartAmount()
    const navigate = useNavigate()
    return (
        <div className="cart">
            <div className="heading">
                <h1>Your Cart</h1>
            </div>
            <div className="cartItems">
                {Products.map(product => cartItems[product.id] > 0 && <CartItem key={product.id} data={product} />)}
            </div>
            {totalAmount > 0 ?
                <div className="checkout">
                    <h2>Total:${totalAmount}</h2>
                    <button onClick={() => navigate('/')} >Continue Shopping</button>
                </div>
                : <h2> Cart is empty</h2>
            }
        </div>
    )
}