import './style.scss';
import { FaUser, FaEnvelope, FaMobileAlt, FaFileAlt, FaHome } from 'react-icons/fa';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
 
export function Contact() {
    return(
        <div className='contact-page'>
            <div className="contact-banner d-flex flex-column justify-content-center align-items-center mb-4">
                <h2>Contato</h2>
                <p><Link to="/">Inicio</Link> / <span>Contato</span></p>
            </div>
            <div className='contact-container container row m-auto'>
                <div className="contact-form col-md-8">
                <h2>Entrar em contato</h2>
                    <div className='input-content d-flex gap-3 justify-content-between align-items-center mb-2'>
                        <div className='input-box d-flex align-items-center mt-3'>
                            <input type="text" placeholder='Nome' />
                            <FaUser className='icon' />
                        </div>
                        <div className='input-box d-flex align-items-center mt-3'>
                            <input type="email" placeholder='E-mail' />
                            <FaEnvelope className='icon' />
                        </div>
                    </div>
                    <div className='input-content d-flex gap-3 justify-content-between align-items-center'>
                        <div className='input-box d-flex align-items-center mt-3'>
                            <input type="number" placeholder='Telephone' />
                            <FaMobileAlt className='icon' />
                        </div>
                        <div className='input-box d-flex align-items-center mt-3'>
                            <input type="text" placeholder='Assunto' />
                            <FaFileAlt className='icon' />
                        </div>
                    </div>
                    <div className='mt-4 textArea-box'>
                        <textarea placeholder='Mensagem'></textarea>
                    </div>
                    <Button className="mt-2 mb-4 p-3">Envie uma mensagem</Button>
                </div>
                <div className='location col-md-4'>
                    <div>
                        <h3>Não Hesite em entrar em contato</h3>
                        <div className='d-flex gap-3 mt-3 mb-3'>
                            <div className='contact-info d-flex justify-content-center align-items-center'>
                                <FaHome className='icon' />
                            </div>
                            <div>
                                <h5>Localização</h5>
                                <p>Loren ipsun 14548484</p>
                            </div>
                        </div>
                        <div className='d-flex gap-3 mb-3'>
                            <div className='contact-info d-flex justify-content-center align-items-center'>
                                <FaEnvelope className='icon' />
                            </div>
                            <div>
                                <h5>Envie um E-mail</h5>
                                <p>m&kdelivery@hotmail.com</p>
                            </div>
                        </div>
                        <div className='d-flex gap-3 mb-3'>
                            <div className='contact-info d-flex justify-content-center align-items-center'>
                                <FaMobileAlt className='icon' />
                            </div>
                            <div>
                                <h5>Ligue para nós</h5>
                                <p>+55 (21) 55892-4875</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}