// import { useState } from "react"

// const Section = ({ title, isvisible, setisvisible }) => {
//     return (
//         <div className="instamart-container">
//             <h3 className="about">{title}</h3>
//             {!isvisible ? <button onClick={() => setisvisible(true)}>show</button> :
//                 <button onClick={() => setisvisible(false)}>hide</button>}
//             {isvisible && <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>}
//         </div>

//     )
// }

// const About = () => {
//     const [isvisible, setisvisible] = useState('')
//     return (
//         <>
//             <Section title="About instamart"
//                 isvisible={isvisible == "about"}
//                 setisvisible={() => setisvisible(isvisible == "about" ? "" : "about")} />

//             <Section title="product instammart"
//                 isvisible={isvisible == "product"}
//                 setisvisible={() => setisvisible(isvisible == "product" ? "" : "product")} />

//             <Section title="carrer instamart"
//                 isvisible={isvisible == "carrer"}
//                 setisvisible={() => setisvisible(isvisible == "carrer" ? "" : "carrer")} />
//         </>
//     )
// }
// export default About
const About = () => {
    return (
        <div>About</div>
    )
}
export default About;