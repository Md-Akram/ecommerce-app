import './product.css'
import { ShopContext } from '../../context/shop-context'
import { useContext } from 'react'

export const Product = (props) => {
    const { id, name, description, price, imageUrl } = props.data
    const { addToCart, cartItems } = useContext(ShopContext)
    const specificItem = cartItems[id]
    return (
        <div className="product">
            <img src={imageUrl} alt={name} />
            <p className="name">{name}</p>
            <p className="descriptin">
                {description}
            </p>
            <p className="price">
                ${price}
            </p>
            <button className="btn" onClick={() => addToCart(id)}>
                Add to Cart {specificItem > 0 && <>({specificItem})</>}
            </button>
        </div>
    )
}