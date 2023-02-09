import './style.scss';
import {
    FaMapMarkerAlt, 
    FaPhone, 
    FaEnvelope, 
    FaFacebookF, 
    FaTwitter,
    FaInstagram
} 
from 'react-icons/fa';

const payments = require('../../assets/images/payment.png');

export function Footer() {
    return (
        <footer>
            <div className='footer-container d-flex justify-content-evenly align-items-center m-auto'>
                <div className='adress'>
                    <h5>Nosso endereço</h5>
                    <div className='d-flex flex-column gap-1'>
                        <div className='adress-box d-flex gap-2'>
                            <FaMapMarkerAlt className='icon' />
                            <h6>Rua Loren Silva</h6>
                        </div>
                        <div className='adress-box d-flex gap-2'>
                            <FaPhone className='icon' />
                            <h6>+45 7 4452-8901</h6>
                        </div>
                        <div className='adress-box d-flex gap-2'>
                            <FaEnvelope className='icon' />
                            <h6>m&kdelivery@hotmail.com</h6>
                        </div>
                        <div className="adress-socials d-flex gap-2">
                            <div className="d-flex justify-content-center align-items-center social" 
                                style={{background:'#084f99'}}
                            >
                                <FaFacebookF />
                            </div>
                            <div className="d-flex justify-content-center align-items-center social" 
                                style={{background:'#1da1f2'}}
                            >
                                <FaTwitter />
                            </div>
                            <div className="d-flex justify-content-center align-items-center social instagram">
                                <FaInstagram />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="info">
                    <h5>Informações</h5>
                    <div>
                        <div className='d-flex flex-column gap-2'>
                            <a href="/">Sobre</a>
                            <a href="/">Contato</a>
                            <a href="/">Politica de privacidade</a>
                            <a href="/">Perguntas frequentes</a>
                            <a href="/">Atendimento ao cliente</a>
                        </div>
                    </div>
                </div>

                <div className="account">
                    <h5>Minha conta</h5>
                    <div>
                        <div className='d-flex flex-column gap-2'>
                            <a href="/">Minha conta</a>
                            <a href="/">Página de login</a>
                            <a href="/">Carrinho de compras</a>
                            <a href="/">Registrar conta</a>
                            <a href="/">Sair</a>
                        </div>
                    </div>
                </div>

                <div className="help ">
                    <h5 className='text-center'>Precisa de ajuda?</h5>
                    <div>
                        <div className='d-flex flex-column gap-2'>
                            <a href="/">Centro de ajuda</a>
                            <a href="/">M&K Delivery termos</a>
                            <a href="/">Termos do autor</a>
                            <a href="/">Delivery licensas</a>
                            <a href="/">Contato</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright mt-5 d-flex justify-content-between align-items-center">
                <img src={payments} alt="payments" />
                <p className='mt-4'>&copy;2023 Todos os direitos reservados.</p>
                
            </div>
        </footer>
    )
}