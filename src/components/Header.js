import { useState, useContext, useEffect } from "react"
import Logo from "../assests/food.png"
import { Link } from "react-router-dom"
// import UserContext from "../utils/Usercontext1"
import store from "../utils/store/store"
import { useSelector } from "react-redux"

import { useNavigate } from "react-router-dom"
import useSessionStorage from '../utils/useSessionStorage';

const Title = () => {
    return (
        <img className="title-img" src={Logo} />
    )
}
const Headercomponenet = () => {
    const cartitem = useSelector((store) => store.cart.items)
    console.log(cartitem)
    const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem("email"));
    const navigate = useNavigate()


    const handleLogout = (e) => {
        sessionStorage.removeItem("email")
        navigate("/");
        window.location.reload(true)

    }
    // console.log(isLoggedIn)
    // const { user } = useContext(UserContext)
    return (
        <div className="container">
            <Title />
            <div className="nav-item-container">
                <div> <ul className="nav-item">
                    <Link to={"/"}><li>Home</li></Link>
                    <Link to={"/about"}><li>About</li></Link>
                    {/* <Link to={"/contact"}><li>Contact</li></Link> */}
                    <Link to={"/help"}><li>Help</li></Link>
                    <Link to={"/cart"}><li>Cart {Object.values(cartitem).length}</li></Link>
                </ul>
                </div>
                <div>
                    {/* {user.name} */}
                    {!isLoggedIn ? <Link to={"/login"}><button className="log">Login</button></Link> : <button onClick={handleLogout} className="log"> Logout</button>}
                    {/* <Link to={"/login"}><button className="log">{!isLoggedIn?"Login":"Logout"}</button></Link> */}
                </div>
            </div>
        </div>
    )
}
export default Headercomponenet