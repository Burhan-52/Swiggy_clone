import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Headercomponenet from "./src/components/Header";
import Body from "./src/components/Body";
import { Footer } from "./src/components/Footer"; // this named import 
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
// import About from "./src/components/About"
import Contact from "./src/components/Contact"
import Errorpage from "./src/components/Errorpage";
import Restaurantmenu from "./src/components/Restaurantmenu";
import Login from "./src/components/Login";
import { Shimmer } from "./src/components/Shimmer";
import UserContext from "./src/utils/Usercontext1";
import Help from "./src/components/Help";
import { Provider } from "react-redux";
import store from "./src/utils/store/store";
import Cart from "./src/components/Cart";
// import About from "./src/components/About"
const About = lazy(() => import('./src/components/About'))

const Applayout = () => {
    // const [user, setuser] = useState({
    //     name: "burhan",
    //     email: "b@gmail.com"
    // }

    return (
        <>
            <Provider store={store}>
                {/* <UserContext.Provider */}
                    {/* value={{
                        user: user,
                        setuser: setuser
                    }}> */}
                    <Headercomponenet />

                    <Outlet />
                    <Footer />
                {/* </UserContext.Provider> */}
            </Provider>
        </>
    )
}

let appRoutes = createBrowserRouter([

    {
        path: "/",
        element: <Applayout />,
        errorElement: <Errorpage />,
        children: [
            {
                path: "/",
                element: <Body user="0hello" />
            },
            // Lazy componenet About 
            {
                path: "/about",
                element:
                    <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense >
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/help",
                element: <Help />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/res/:id",
                element: < Restaurantmenu />
            },
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);