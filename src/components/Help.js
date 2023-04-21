import { useState } from "react"
import { help_Question } from "../../config"

const Section = ({ title, isvisible, setisvisible, item }) => {

    return (
        <div className="instamart-container">
            <h3 className="about">{item}</h3>
            {!isvisible ? <button onClick={() => setisvisible(true)}>show</button> :
                <button onClick={() => setisvisible(false)}>hide</button>}
            {isvisible && <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>}
        </div>
    )
}

const Help = () => {
    const [isvisible, setisvisible] = useState(null)
    return (
        <>
            {help_Question.map((item, i) => {
                return (

                    <Section item={item}
                        isvisible={isvisible == i}
                        setisvisible={() => setisvisible(isvisible == i? -1 : i)} />
                )
            })}

        </>
    )
}
export default Help;