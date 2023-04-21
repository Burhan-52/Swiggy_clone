import { useState, useEffect } from "react"

const useRestaurant = (id) => {

    const [restaurant, setrestaurant] = useState(null)
    const [resimg, setresimg] = useState({})
    useEffect(() => {
        Restaurantmenudata()
    }, [])

    async function Restaurantmenudata() {
        let data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.1846034&lng=73.022458&restaurantId=${id}&submitAction=ENTER`)
        let json = await data.json()
        console.log(json)
        setrestaurant(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
        setresimg(json?.data?.cards[0]?.card?.card?.info)
    }
    return [restaurant, resimg];
}
export default useRestaurant;