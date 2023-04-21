import { useContext, useEffect, useState } from "react";
import Resturantcard from "./Restarantcard";
import { Shimmer } from "./Shimmer";
import Search from "../assests/search.png"
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useRestaurantCard from "../utils/useRestaurantCard";
import useOnline from "../utils/useOnline";
// import UserContext from "../utils/Usercontext1";

const Body = () => {
    const [searchTxt, setsearchTxt] = useState("");
    const [allrestaurant, searchFilteredTxt, suggestion, setsearchFilteredTxt] = useRestaurantCard()
// console.log(message)
// const {user,setuser} = useContext(UserContext)

    function onsearch(search) {
        setsearchTxt(search)
    }

    // TO check if user is online or offline
    const isonline = useOnline()
    if (!isonline) {
        return <h1>Are you offline,please check your internet </h1>
        // setmessage("Are you offline,please check your internet")
    }

    if (!allrestaurant) return null;
    // if (searchFilteredTxt.length == 0) return <h3>Restaurant is not Found</h3>;
    return (
        <>
            <div >
                <div className="search-container">
                    <input className="search" type="Text" placeholder="Search"
                        value={searchTxt} onChange={(e) => setsearchTxt(e.target.value)} />
                    <button className="search-btn" onClick={() => {
                        let data = filterData(searchTxt, allrestaurant)
                        setsearchFilteredTxt(data)
                    }}>
                        <img className="search-img" src={Search}
                        />
                    </button>
                </div>
                <div className="dropdown-container ">
                    {suggestion.filter((item) => {
                        const s = searchTxt.toLowerCase()
                        const name = item.data.name.toLowerCase()
                        return s && name.startsWith(s)
                    })
                        .map((item, i) => {
                            return (
                                <div key={i} className="dropdown-row" onClick={() => {
                                    onsearch(item.data.name)
                                }
                                }>{searchTxt != item.data.name ? item.data.name : ""}
                                </div>
                            )
                        })}
                </div>
                {/* <input value={user.name} onChange={
                    (e)=> setuser({
                        ...user,
                        name:e.target.value
                    })
                }/> */}

            </div>

            <div className="recommended-card">{searchFilteredTxt.length} restaurants</div>
            {
                allrestaurant == 0 ? <Shimmer /> : searchFilteredTxt.length == 0 ? <h3 className="restaurantnotfound">Restaurant is not Found!!</h3> :
                    <div className="component-card">
                        {searchFilteredTxt.map((res) => {
                            return <Link key={res?.data?.id} to={"res/" + res?.data?.id}> <Resturantcard  {...res.data} /></Link>;
                        })}
                    </div>
            }

        </>
    );
};

export default Body;
