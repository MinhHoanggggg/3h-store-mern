
const CartItem = ({ cart: cartTotal }) => {
    
    return (
        <>
            <span className="cart__subtotal h3">{cartTotal}₫</span>
        </>
    )
}

export default CartItem