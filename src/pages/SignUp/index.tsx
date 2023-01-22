import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input } from '../../components/FormInput';
import './style.scss';

export function SignUp() {

    return (
        <div className="signUp-page py-5">
           <div className="signUp-container d-flex justify-content-center align-items-center flex-column m-auto gap-3">
            <h2>Registrar conta</h2>
            <form className='d-flex flex-column'>
                <div className='input-box d-flex gap-3'>
                    <Input name='nome' type = "text" placeholder='Nome' />
                    <Input name='ultimo nome' type = "text" placeholder='Ultimo nome' />
                </div>
                <div className='input-box d-flex gap-3'>
                    <Input name='email' type = "email" placeholder='E-mail' />
                    <Input name='telephone' type = "number" placeholder='Telefone' />
                </div>
                <Input name='senha' type = "password" placeholder='Senha' />
                <Input name='confirmarSenha' type = "password" placeholder='Confirmar senha' />
                <Button className="w-100">Registrar</Button>
            </form>
            <h6>Já possuí uma conta? <Link to="/login">Entrar</Link></h6>
           </div>
        </div>
    )
}