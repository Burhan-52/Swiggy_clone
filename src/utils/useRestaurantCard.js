import { useState, useEffect } from "react";
import { restaurant_card_url } from '../../config'

function useRestaurantCard() {
    const [allrestaurant, setallrestaurant] = useState([])
    const [searchFilteredTxt, setsearchFilteredTxt] = useState([]);
    const [suggestion, setsuggestion] = useState([])

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        try {
            let data = await fetch(restaurant_card_url)
            let json = await data.json()
            console.log(json)
            setallrestaurant(json?.data?.cards[2]?.data?.data?.cards)
            setsearchFilteredTxt(json?.data?.cards[2]?.data?.data?.cards)
            setsuggestion(json?.data?.cards[2]?.data?.data?.cards)
        } catch (err) {
            console.log('there was an error', err)
        }
    }
    return [allrestaurant, searchFilteredTxt, suggestion, setsearchFilteredTxt]
}
export default useRestaurantCard;
