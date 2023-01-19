import { useState} from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/FormInput';
import './style.scss';

export function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <div className='login-page py-5'>
            <form className="login-container d-flex justify-content-center align-items-center flex-column m-auto gap-2">
                <h2>M&K Delivery</h2>
                <Input 
                    name='email' 
                    type="email" 
                    placeholder='E-mail'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input 
                    name='senha' 
                    type="password" 
                    placeholder='Senha'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type='submit' className="w-100">Entrar</Button>
                <h6>Esqueceu a senha?</h6>
                <h6>Não tem uma conta? <a href="/signup">Criar conta</a></h6>
            </form>
        </div>
    )
}