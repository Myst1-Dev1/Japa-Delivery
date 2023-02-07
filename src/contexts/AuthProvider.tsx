import { AuthContext } from "./AuthContext"
import { UserApi } from "../services/api/api";
import { ReactNode, useEffect, useState } from "react";
import { IUser } from "../Types/User";

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ( { children }: AuthProviderProps ) => {

    const [user, setUser] = useState< IUser | null >(null);

    useEffect(() => {
        validateToken();
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

        if(res.status == 201){
            const tokenGenerated = `${res.headers['auth-token']}`
            localStorage.setItem('token', tokenGenerated);
    
            return true;
        }
        else { 
            return false;
        }
        
    }
    
    const signOut = async () => {
        localStorage.removeItem('token');
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            <div>{children}</div>
        </AuthContext.Provider>
    )

}