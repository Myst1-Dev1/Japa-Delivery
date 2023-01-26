import { useContext, useState, FormEvent} from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/FormInput';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';

import './style.scss';

export function Login() {
    const auth = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<any>(null)
    const [isLogged, setIsLogged] = useState<string | null>(null);

    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault();

        setIsLogged(null);
        setError(null);

        await auth.signIn(email, password)
        .then(() => {

            setIsLogged('Usuario logado com sucesso');
            setTimeout(() => {

                if(window.location.href === 'http://localhost:3000/cart'){
                    return window.location.href = '/cart';
                }
                else{
                    return window.location.href = '/';
                }
                
            }, 700);
        }).catch((error) => setError(error));
    }


    return (
        <div className='login-page py-5'>
            <form className="login-container d-flex justify-content-center align-items-center flex-column m-auto gap-2">
                <h2>M&K Delivery</h2>
                <Input 
                    name='email' 
                    type="email" 
                    placeholder='E-mail'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <Input 
                    name='senha' 
                    type="password" 
                    placeholder='Senha'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <Button className="w-100" event={handleSubmit}>Entrar</Button>
                <h6>Esqueceu a senha?</h6>
                <h6>Não tem uma conta? <Link to="/signup">Criar conta</Link></h6>
                {
                    error && 
                        <>
                            <div className='message-error'>
                                <h6>{error.response.data}</h6>
                            </div>
                        </>
                }
                {
                    isLogged && 
                        <>
                            <div className='message-success'>
                                <h6>{isLogged}</h6>
                            </div>
                        </>
                }
            </form>
        </div>
    )
}