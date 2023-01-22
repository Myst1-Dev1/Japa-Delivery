import { useContext, useState, useEffect } from "react";
import { Home } from "../../pages/Home";
import { AuthContext } from "./AuthContext";


export const DontLogin = ({ children }: { children: JSX.Element }) => {
    const auth = useContext(AuthContext);
    const [openCart, setOpenCart] = useState(false);

    function handleOpenCart() {
      setOpenCart(true);
    }

    if(auth.user){
        return <Home onHandleOpenCart = {handleOpenCart} />;
    }

    return children;

}