import { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
import './cartItem.css'

export const CartItem = (props) => {
    const { imageUrl, price, name, id } = props.data
    const {
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemCount
    } = useContext(ShopContext)
    return (
        <div className="cartItem">
            <img src={imageUrl} alt={name} />
            <div className="description">
                <p className="name">
                    {name}
                </p>
                <p className="price">
                    {price}
                </p>
                <div className="countHandler">
                    <button onClick={() => removeFromCart(id)}>-</button>
                    <input
                        value={cartItems[id]}
                        onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                    />
                    <button onClick={() => addToCart(id)} >+</button>
                </div>
            </div>
        </div>
    )
}