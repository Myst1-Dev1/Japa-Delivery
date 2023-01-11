import { Button } from '../../components/Button';
import { Input } from '../../components/FormInput';
import './style.scss';

export function Login() {

    return (
        <div className='login-page py-5'>
            <div className="login-container d-flex justify-content-center align-items-center flex-column m-auto gap-2">
                <h2>M&K Delivery</h2>
                <Input name='email' type="email" placeholder='E-mail' required />
                <Input name='senha' type="password" placeholder='Senha' required />
                <Button className="w-100">Entrar</Button>
                <h6>Esqueceu a senha?</h6>
                <h6>Não tem uma conta? <a href="/signup">Criar conta</a></h6>
            </div>
        </div>
    )
}