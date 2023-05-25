import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ItemQuantity from "./ItemQuantity";

const Cart = () => {
    const cartitem = useSelector(store => store.cart.items)
    
    console.log(" cart cartitem --->"+cartitem)

    return (
        <>
            <div>Cart items</div>
            {Object.values(cartitem) == 0 ? <h1>Your cart is empty</h1> :
                <div className="cart-main-container">
                    <div className="first-conatiner">{sessionStorage.getItem("email") ? <button className="cart-btn">Pay</button> : <Link to={"/login"}><button className="cart-btn">Login</button></Link>}</div>
                    <div className="second-conatiner">
                        {Object.values(cartitem).map((item) => {
                            return (
                                <div key={item.id} className="cart-name-price">
                                    <div className="cart-name">{item.name}</div>
                                    <ItemQuantity item={item} />
                                    <div className="cart-price">{item.price / 100 * item.quantity}</div>

                                </div>)

                        })}
                        <div className="cart-divider"></div>
                        <div >
                            <div className="pay">
                                <div>To pay </div>
                                <div>₹{Object.values(cartitem)
                                    .map((item) => (item.price / 100 * item.quantity))
                                    .reduce((acc, curr) => acc + curr, 0)}</div>
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    )
}
export default Cart;