import { BsCoin, BsEnvelope, BsHeadphones, BsTruck } from 'react-icons/bs';
import { Button } from '../../components/Button';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './style.scss';
const japaneseCook = require('../../assets/images/japanese-cook.png');
const teamMember1 = require('../../assets/images/team-member1.jpg');
const teamMember2 = require('../../assets/images/team-member2.jpg');
const teamMember3 = require('../../assets/images/team-member3.jpg');

const teamMembers = [
    {
        id:1,
        image: `${teamMember1}`,
        name: "Loren ipsun",
        ocupation: "Chef"
    },
    {
        id:2,
        image: `${teamMember2}`,
        name: "Loren ipsun",
        ocupation: "Chef"
    },
    {
        id:3,
        image: `${teamMember3}`,
        name: "Loren ipsun",
        ocupation: "Chef"
    },
]

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
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <Button className="mb-4">Saíba mais</Button>
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

            <div className="team container mt-5">
                <h2>Membros da nossa equipe</h2>
                <div className='team-container d-flex justify-content-between align-items-center'>
                    {teamMembers.map(member => {
                        return (
                                <div key={member.id} className="team-member mt-5 mb-5">
                                    <div className="img-container">
                                        <img src={member.image} alt="" />
                                        <div className="member-socials d-flex justify-content-center align-items-center gap-3">
                                            <div className="social d-flex justify-content-center align-items-center">
                                                <FaFacebookF />
                                            </div>
                                            <div className="social d-flex justify-content-center align-items-center">
                                                <FaTwitter />
                                            </div>
                                            <div className="social d-flex justify-content-center align-items-center">
                                                <FaInstagram />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-2'>
                                        <h3>{member.name}</h3>
                                        <p>{member.ocupation}</p>
                                    </div>
                                </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}