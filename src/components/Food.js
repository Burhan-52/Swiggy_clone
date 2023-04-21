import { Img_Url } from "../../config";
const Food = ({name, imageId}) =>{
    return (
        <div>
            <h1>Food</h1>
           <p>{name}</p> 
           <img src={Img_Url + imageId}/>
        </div>
    )
}
export default Food;