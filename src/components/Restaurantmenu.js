import { useParams } from "react-router-dom"
import { Img_Url } from "../../config"
import { MenuShimmer } from "./Shimmer"
import Star from "../assests/star.png"
import Clock from "../assests/clock.png"
import useRestaurant from "../utils/useRestaurant";
import { additem } from "../utils/store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react"
import Menuitem from "./Menuitem"
import ViewCart from "./ViewCart"

const Restaurantmenu = () => {
    const [count, setcount] = useState(0)
    const { id } = useParams()
    const [restaurant, resimg] = useRestaurant(id)
    const dispatch = useDispatch()

    const cartitem = useSelector(store => store.cart.items)
    

    return (
        <>
            <div key={resimg?.id} className="carsel-container">
                <div className="carsel">
                    <img className="carsel-img" src={Img_Url + resimg?.cloudinaryImageId} />
                    <div>
                        <div className="carsel-restaurant-name">{resimg?.name}</div>
                        <div className="carsel-restaurant-cuisines">{resimg?.cuisines?.join(", ")}</div>
                        <div className="carsel-restaurant-star-minutes">
                            <div className="rating" style={resimg?.avgRatingString < 4
                                ? { backgroundColor: "red" }
                                : resimg?.avgRatingString === "--"
                                    ? { backgroundColor: "#939499", color: "black" }
                                    : { color: "white" }}>
                                {resimg.avgRatingString}
                                <img className="star" src={resimg?.avgRatingString === "--" ? "" : Star} />
                            </div>
                            <span>|</span>
                            <div className="clock">
                                <img src={Clock} />
                            </div>
                            <div>{resimg?.sla?.slaString}</div>
                        </div>
                    </div>
                </div>
            </div>
            {!restaurant ? <MenuShimmer /> :
                <div>
                    <div className="recommended">Recommended ({restaurant.length})</div>
                    {Object.keys(cartitem).length?<ViewCart/>:""}
                    {restaurant.map((item) => {
                        return <Menuitem key={item.card?.info?.id}  item={item} />
                    })}
                </div>
            }
        </>
    )
}
export default Restaurantmenu;