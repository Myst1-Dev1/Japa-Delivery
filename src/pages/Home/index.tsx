import './style.scss';
import { Products } from '../../components/Products';
import { Button } from '../../components/Button';
import { DealsHotProduct } from '../../components/DealsHotProduct';
// import { useContext } from 'react';
// import { AuthContext } from '../../contexts/Auth/AuthContext';

const bannerImg = require('../../assets/images/banner-image.png');
const testimonial1 = require('../../assets/images/testimonial-1.jpg');
const testimonial2 = require('../../assets/images/testimonial-2.jpg');
const testimonial3 = require('../../assets/images/testimonial-3.jpeg');
const fivestar = require('../../assets/images/fivestar.png');

export function Home() {   

    return (
        <div className='home-page'>
            {/* Banner */}
            <div className="banner d-flex align-items-center justify-content-evenly">
                <div className="banner-subtitles">
                    <p>Produto Tendência em 2022</p>
                    <h2>O melhor da <br /> culinária japonesa</h2>
                    <p>Loren ipsun is simply dummy text of the printing and <br /> 
                        typesetting industry. Lorem Ipsum has been the industry'
                    </p>
                    <Button>Compre agora</Button>
                </div>

                <div className='banner-image'>
                    <img src={bannerImg} alt="" />
                </div>
            </div>
            <Products />
            <DealsHotProduct countDownTimeStampMs={2230686000000} />
            <div className='summer-sale d-flex justify-content-start align-items-center container mt-5 mb-5'>
                <div className="summer-sale-subtitles d-flex ms-5 flex-column">
                    <h4>Liquidação de verão</h4>
                    <h2> <span> 39% </span> OFF</h2>
                    <p>Free on all your order, Free Shipping and 30 days mony back guarantee</p>
                    <Button>Compre agora</Button>
                </div>
            </div>

            <div className="testimonials mt-5 mt-5 container">
                <h4>Nosso Depoimento Impressionante</h4>
                <div className='mt-5 mb-5 testimonial-container d-flex justify-content-between align-items-center'>
                    <div className='testimonial-box m-auto mb-4'>
                        <div className='d-flex align-items-center gap-4'>
                            <div className="img-container">
                                <img src={testimonial1} alt="japanese chef" />
                            </div>
                            <div>
                                <h5>Loren ipsum</h5>
                                <img src={fivestar} alt="fivestar" />
                            </div>
                        </div>
                        <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione enim commodi 
                            ducimus amet eos nulla reiciendis consequatur! Ab, assumenda blanditiis! 
                            Autem odit accusamus debitis ducimus ullam minus expedita! Libero, porro.</p>
                    </div>
                    <div className='testimonial-box m-auto mb-4'>
                        <div className='d-flex align-items-center gap-4'>
                            <div className="img-container">
                                <img src={testimonial2} alt="japanese chef" />
                            </div>
                            <div>
                                <h5>Loren ipsum</h5>
                                <img src={fivestar} alt="fivestar" />
                            </div>
                        </div>
                        <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione enim commodi 
                            ducimus amet eos nulla reiciendis consequatur! Ab, assumenda blanditiis! 
                            Autem odit accusamus debitis ducimus ullam minus expedita! Libero, porro.</p>
                    </div>
                    <div className='testimonial-box m-auto mb-4'>
                        <div className='d-flex align-items-center gap-4'>
                            <div className="img-container">
                                <img src={testimonial3} alt="japanese chef" />
                            </div>
                            <div>
                                <h5>Loren ipsum</h5>
                                <img src={fivestar} alt="fivestar" />
                            </div>
                        </div>
                        <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione enim commodi 
                            ducimus amet eos nulla reiciendis consequatur! Ab, assumenda blanditiis! 
                            Autem odit accusamus debitis ducimus ullam minus expedita! Libero, porro.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}