import { IUser } from "./User";

export interface IAuthContextType {
    user:  IUser | null;
    signIn: ( email: string, password: string ) => Promise<boolean>;
    signOut: () => void; 
}