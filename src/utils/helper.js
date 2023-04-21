export function filterData(searchTxt, allrestaurant) {
    const a = allrestaurant.filter((x) => {
        return x?.data?.name?.toLowerCase().includes(searchTxt.toLowerCase())
    })
    return a
}