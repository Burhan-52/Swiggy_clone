import { createContext, useContext } from "react";

const UserContext = createContext({
    user: {
        name: "dummy name",
        email: "email@gmail.com"
    }
})
UserContext.displayName = "ghhuhd";

export default UserContext;