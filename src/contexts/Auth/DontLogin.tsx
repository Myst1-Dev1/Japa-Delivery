import { useContext, useEffect } from "react";
import { Home } from "../../pages/Home";
import { AuthContext } from "./AuthContext";

export const DontLogin = ({ children }: { children: JSX.Element }) => {
    const auth = useContext(AuthContext);

    if(auth.user){
        return <Home />
    }

    return children;

}