import { createContext } from "react";
import { IAuthContextType } from "../../Types/AuthContextType";

export const AuthContext = createContext<IAuthContextType>(null!);