import { AuthContext } from "./AuthContext"
import { UserApi } from "../services/api/api";
import { ReactNode, useEffect, useState } from "react";
import { IUser } from "../Types/User";import { useNavigate } from "react-router-dom";

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ( { children }: AuthProviderProps ) => {
    const navigate = useNavigate();

    // export const AuthProvider = ( { children }: { children: JSX.Element} )

    const [user, setUser] = useState< IUser | null >(null);

    useEffect(() => {
        validateToken();
        console.log('user', user)
    },[UserApi])


    const validateToken = async () => {
        const tokenExists = localStorage.getItem('token');
        if(tokenExists){
            const tk = { token: tokenExists }
            const userData = await UserApi.tokenVerify(tk);
            if(userData.data) {
                setUser(userData.data);
            }
        }
    }

    const signIn = async ( email: string, password: string ) => {

        const res = await UserApi.login(email, password);

        if(res.status == 200){
            const tokenGenerated = `${res.headers['auth-token']}`
            localStorage.setItem('token', tokenGenerated);
    
            return true;
        }
        else { 
            console.log('hmmmmm', res)
            return false;
        }

        
    }
    
    const signOut = async () => {
        localStorage.removeItem('token');
        setUser(null);
        // navigate('/login');
    }

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {/* { children } */}
            <div>{children}</div>
        </AuthContext.Provider>
    )

}