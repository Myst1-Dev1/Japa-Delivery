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

const userImage = require('../../assets/images/user-image.png');

export function Header() {
    const [openResponsiveMenu, setOpenResponsiveMenu] = useState(false);
    const [openProfileUser, setOpenProfileUser] = useState(false);

    const { handleOpenCart, shoppingCart } = useCart();

      const auth = useContext(AuthContext);

    function handleOpenResponsiveMenu() {
        setOpenResponsiveMenu(true);
    }
    function handleCloseResponsiveMenu() {
        setOpenResponsiveMenu(false);
    }

    function handleOpenProfileUser() {
        setOpenProfileUser(!openProfileUser);
    }

    useEffect(() => {

    },[auth.user]);

        
    return (
        <div className='header'>
            <header className='d-flex justify-content-evenly align-items-center'>
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
                    <div>
                       <Link className="icon text-light" to="/favorites"> <BsHeart /> </Link>
                    </div>
                    {
                        auth.user ? (
                            <>
                                <div className="user-image">
                                    <img onClick={handleOpenProfileUser} src={userImage} alt="user" />
                                </div>

                                {openProfileUser && (
                                   <div className='user-profile d-flex flex-column justify-content-between'>
                                        <div>
                                        <h6>{`${auth.user.firstname} ${auth.user.lastname}`}</h6>
                                        </div>
                                        <div onClick={auth.signOut} className="icon d-flex align-items-center gap-2">
                                            <GoSignOut className='icon'  />
                                            <h6>Logout</h6>
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
                    </div>
            }

            <CartProduct />
        </div>
    )
}