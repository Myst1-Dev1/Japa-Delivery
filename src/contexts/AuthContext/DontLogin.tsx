import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const DontLogin = ({ children }: { children: JSX.Element }) => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    if(auth.user){
        return navigate('/');
    }

    return children;

}
