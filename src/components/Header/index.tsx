import { useState, useContext, useEffect} from 'react';
import { BsHeart, BsPerson, BsCart } from 'react-icons/bs';
import { HiBars3 } from 'react-icons/hi2';
import { IoMdClose } from 'react-icons/io'
import { GoSignOut } from 'react-icons/go';
import './style.scss';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import { useCart } from '../../contexts/CartContext/useCart';
import { CartProduct } from '../CartProducts';
import { useFavorites } from '../../contexts/FavoriteContext/useFavorites';

const userImage = require('../../assets/images/user-image.png');
//const deliveryLogo = require('../../assets/images/mek-logo.png');

export function Header() {
    const [openResponsiveMenu, setOpenResponsiveMenu] = useState(false);
    const [openProfileUser, setOpenProfileUser] = useState(false);

    const { handleOpenCart, shoppingCart } = useCart();
    const { favorites } = useFavorites();

      const auth = useContext(AuthContext);

    function handleOpenResponsiveMenu() {
        setOpenResponsiveMenu(true);
    }
    function handleCloseResponsiveMenu() {
        setOpenResponsiveMenu(false);
    }
    
    function handleOpenResponsiveCart() {
        setOpenResponsiveMenu(false);
        handleOpenCart();
    }

    function handleOpenProfileUser() {
        setOpenProfileUser(!openProfileUser);
    }

    useEffect(() => {

    },[auth.user]);

        
    return (
        <div className='header'>
            <header className='d-flex justify-content-around align-items-center'>
                <h1 className='mb-0'>M&K Delivery</h1>
                <div className="navBar d-flex justify-content-between align-items-center">
                    <nav>
                        <ul className='d-flex align-items-center m-auto'>
                            <li><Link to="/">INICIO</Link></li>
                            <li><Link to="/loja">LOJA</Link></li>
                            <li><Link to="/sobre">SOBRE</Link></li>
                            <li><Link to="/contato">CONTATO</Link></li>
                        </ul>
                    </nav>
                </div>

                <div className="header-icons d-flex align-items-center">
                    <div className="icon">
                        <BsCart onClick={handleOpenCart} />
                        <div className="items-in-cart">
                            <p>{shoppingCart.length}</p>
                        </div>
                    </div>
                    <div className='icon'>
                       <Link className='icon' to="/favorites"> <BsHeart /> </Link>
                       <div className="favorites-amount">
                            <p>{favorites.length}</p>
                       </div>
                    </div>
                    {
                        auth.user ? (
                            <>
                                <div className="user-image">
                                    <img onClick={handleOpenProfileUser} src={userImage} alt="user" />
                                </div>

                                {openProfileUser && (
                                   <div className='user-profile d-flex flex-column justify-content-between'>
                                        <div className='profile-box p-2 d-flex align-items-center'>
                                            <img src={userImage} alt="user" />
                                            <h6 className='m-auto'>{`${auth.user.firstname} ${auth.user.lastname}`}</h6>
                                        </div>
                                        <div className='mt-2 mb-1 px-2 py-3 d-flex flex-column gap-1 border-top border-bottom border-muted'>
                                            <Link to="/"><h6>Ínicio</h6></Link>
                                            <Link to="/"><h6>Histórico de pedidos</h6></Link>
                                            <Link to="/"><h6>Endereços</h6></Link>
                                            <Link to="/favorites"><h6>Favoritos</h6></Link>
                                            <Link to="/"><h6>Registrar novo produto</h6></Link>
                                                      
                                        </div>
                                       
                                        <div>
                                            {/* <h6>Histórico de compras</h6> */}
                                            <div onClick={auth.signOut} className="icon p-2 d-flex align-items-center gap-2">
                                                <GoSignOut className='icon'  />
                                                <h6 className='mb-0'>Sair</h6>
                                            </div>
                                        </div>
                                   </div>
                                )}
                            </>
                            )
                            :
                            (
                                <div className="icon">
                                    <Link to="/login" ><BsPerson style={{fontSize:'1.7rem'}} className='icon' /></Link>
                                </div>
                            )
                    }
                    <div className="icon icon-responsive">
                        <HiBars3 onClick={handleOpenResponsiveMenu} />
                    </div>
                </div>
            </header>

            {/* Responsive Menu */}

            {openResponsiveMenu && 
                    <div className="responsive-menu">
                            <h6 className='mt-2 text-center'>M&K Delivery</h6>
                            <IoMdClose onClick={handleCloseResponsiveMenu} className='close-responsive-menu' />
                          <div className='navBar-responsive d-flex flex-column mt-5 gap-2'>
                              <div className="item-menu">
                                  <Link to="/">INICIO</Link>
                              </div>
                              <div className="item-menu">
                                  <Link to="/loja">LOJA</Link>
                              </div>
                              <div className='item-menu'>
                                  <Link to="/sobre">SOBRE</Link>
                              </div>
                              <div className='item-menu'>
                                  <Link to="/contato">CONTATO</Link>
                              </div>
                          </div>

                          <div className="responsive-header-icons d-flex justify-content-center align-items-center gap-3 px-3 mt-5">
                                <div className="icon">
                                    <BsCart onClick={handleOpenResponsiveCart} />
                                    <div className="items-in-cart">
                                        <p>{shoppingCart.length}</p>
                                    </div>
                                </div>
                                <div className="icon">
                                    <Link className='icon' to="/favorites"> <BsHeart /> </Link>
                                    <div className="favorites-amount">
                                        <p>{favorites.length}</p>
                                    </div>
                                </div>
                                {
                                    auth.user ? (
                                        <>
                                            <div className="user-image">
                                                <img onClick={handleOpenProfileUser} src={userImage} alt="user" />
                                            </div>
                                        </>
                                        )
                                        :
                                        (
                                            <div className="icon">
                                                <Link to="/login" ><BsPerson style={{fontSize:'1.7rem'}} className='icon' /></Link>
                                            </div>
                                        )
                                }
                          </div>
                    </div>
            }

            <CartProduct />
        </div>
    )
}