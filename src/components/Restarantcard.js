import { useContext } from "react"
import { Img_Url } from "../../config"
import Star from "../assests/star.png"
// import UserContext from "../utils/Usercontext1"


const Resturantcard = ({ name, cuisines, avgRating, cloudinaryImageId, slaString, costForTwoString }) => {
    // console.log(cuisines)
    // const { user } = useContext(UserContext)
    return (
        <>
            <div className="container-card">
                {/* {user} */}
                <div className="card">
                    <div className="img-min">
                        <div className="minutes">{slaString}</div>
                        <img className="main-img"
                            src={Img_Url + cloudinaryImageId} />
                    </div>
                    <div className="name">{name?.length < 20 ? name : name?.slice(0, 15) + "..."} </div>
                    {/* <div className="name">{name} </div> */}
                    {/* <div className="cuisines">{cuisines?.join(", ").split(" ", 3)}</div> */}
                    <div className="cuisines">{cuisines?.join(", ")}</div>
                    <div className="offer-container">
                        <div className="rating" style={avgRating < 4
                            ? { backgroundColor: "red" }
                            : avgRating === "--"
                                ? { backgroundColor: "white", color: "black" }
                                : { color: "white" }}>
                            {avgRating}
                            <img className="star" src={avgRating === "--" ? "" : Star} />
                        </div>
                        <div className="offer"> ‧ {costForTwoString}</div>
                    </div>
                       {/* {user.name}
                       {user.email} */}
                </div>
            </div>
        </>
    )
}
export default Resturantcard;