import { createContext } from 'react';
import { IAuthContextType } from '../../types/AuthContextType';

export const AuthContext = createContext<IAuthContextType>(null!);