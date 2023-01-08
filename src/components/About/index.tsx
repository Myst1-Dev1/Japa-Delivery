import { BsCoin, BsEnvelope, BsHeadphones, BsTruck } from 'react-icons/bs';
import { Button } from '../Button';
import './style.scss';
const japaneseCook = require('../../assets/images/japanese-cook.png');

export function About() {
    return (
        <>
            <div className="about d-flex justify-content-between align-items-center container mt-5 mb-3">
                <div className="about-subtitles">
                    <h4>Quem é a <br /> M&K Delivery</h4>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it
                        to make a type specimen book. 
                    </p>
                    <Button>Saíba mais</Button>
                </div>
                <div className="img-container">
                    <img src={japaneseCook} alt="japanese-cook" />
                </div>
            </div>

             {/* About delivery services */}
            <div className="about-services container d-flex justify-content-between align-items-center">
                <div className="service d-flex align-items-center">
                    <BsTruck className='service-icon' />
                    <div className="service-subtitles">
                        <h6>Entrega grátis</h6>
                        <p>Pedidos de todos os itens</p>
                    </div>
                </div>
                <div className="service d-flex align-items-center">
                    <BsCoin className='service-icon' />
                    <div className="service-subtitles">
                        <h6>Devolução e reembolso</h6>
                        <p>Garantia de devolução de dinheiro</p>
                    </div>
                </div>
                <div className="service d-flex align-items-center">
                    <BsHeadphones className='service-icon' />
                    <div className="service-subtitles">
                        <h6>Suporte de qualidade</h6>
                        <p>Sempre online 24/7</p>
                    </div>
                </div>
                <div className="service d-flex align-items-center">
                    <BsEnvelope className='service-icon' />
                    <div className="service-subtitles">
                        <h6>Junte-se à newsletter</h6>
                        <p>20% de desconto ao se inscrever</p>
                    </div>
                </div>
            </div>
        </>
    )
}