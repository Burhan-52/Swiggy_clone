import { Img_Url } from "../../config"
import { additem, removeitem } from "../utils/store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react"
import ItemQuantity from "./ItemQuantity";
import ViewCart from "./ViewCart";

const Menuitem = (props) => {
    const [count, setcount] = useState(0)
    const dispatch = useDispatch()
    console.log("gdgdg" + props.item?.card?.quantity)

    const cartitem = useSelector(store => store.cart.items)

    const handleadditem = (item) => {
        dispatch(additem(item))
        setcount(count + 1)
    }
    const handleremoveitem = (item) => {
        dispatch(removeitem(item))
        setcount(count - 1)
    }
    return (
        <>
            <div key={props.item?.card?.info?.id} className="restaurant-menu-container">
                <div className="restaurant-menu">
                    <div>
                        <div className="restaurant-menu-name">{props.item?.card?.info?.name}</div>
                        <div className="restaurant-menu-price">&#8377;{!(props.item?.card?.info?.price) ? "--" : props.item?.card?.info?.price / 100}</div>
                    </div>
                    <div>
                        <img className="restaurant-menu-img" src={Img_Url + props.item?.card?.info?.imageId} />
                        {/* <ItemQuantity item={props.item?.card?.info} /> */}
                        <div className="quantity-container">
                            <div className="quantity-btn" onClick={() => handleremoveitem(props.item?.card?.info.id)}>-</div>
                            <div className="show-quantity">{count}</div>
                            <div className="quantity-btn" onClick={() => handleadditem(props.item?.card?.info)}>+</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
                  
        </>
    )
}
export default Menuitem
