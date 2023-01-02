import './cartItem.css'

export const CartItem = (props) => {
    const { imageUrl, price, name } = props.data
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
            </div>
        </div>
    )
}