import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Input } from '../../components/FormInput';
import './style.scss';

export function SignUp() {

    return (
        <div className="signUp-page py-5">
           <div className="signUp-container d-flex justify-content-center align-items-center flex-column m-auto gap-3">
            <h2>Registrar conta</h2>
            <Input name='nome' type = "text" placeholder='Nome' />
            <Input name='email' type = "email" placeholder='E-mail' />
            <Input name='senha' type = "password" placeholder='Senha' />
            <Input name='confirmarSenha' type = "password" placeholder='Confirmar senha' />
            <Button className="w-100">Registrar</Button>
            <h6>Já possuí uma conta? <a href="/login">Entrar</a></h6>
           </div>
           <Footer />
        </div>
    )
}