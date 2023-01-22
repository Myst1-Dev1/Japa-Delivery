import { useState, useContext, useEffect} from 'react';
import { BsHeart, BsPerson, BsCart } from 'react-icons/bs';
import { HiBars3 } from 'react-icons/hi2';
import { IoMdClose } from 'react-icons/io'
import './style.scss';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';


interface HeaderProps {
    onHandleOpenCart: () => void;
}

export function Header({ onHandleOpenCart }: HeaderProps) {
    const [openResponsiveMenu, setOpenResponsiveMenu] = useState(false);

      const auth = useContext(AuthContext);

    function handleOpenResponsiveMenu() {
        setOpenResponsiveMenu(true);
    }
    function handleCloseResponsiveMenu() {
        setOpenResponsiveMenu(false);
    }

    useEffect(() => {

    },[auth.user]);

        
    return (
        <div className='header'>
            <header className='d-flex justify-content-evenly align-items-center'>
                <h1>M&K Delivery</h1>
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
                        <BsCart onClick={onHandleOpenCart} />
                        {/* <div className="items-in-cart">
                            <p>0</p>
                        </div> */}
                    </div>
                    <div className="icon">
                       <Link to="/favorites"> <BsHeart /> </Link>
                    </div>
                    {
                        auth.user ? (
                            <>
                                <div className="icon ps-2">
                                    <h6 style={{fontSize:'13px', textAlign: 'center'}} >{`${auth.user.firstname} ${auth.user.lastname}`}</h6>
                                </div>
                                <div className="icon ps-2">
                                    <a href='/login' style={{fontSize:'13px'}}  onClick={auth.signOut}>Sair</a>
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

            {/* Shopping cart */}
            {/* {onOpenCart && (
                <div className="shopping-cart">
                    <div className='cart-box d-flex justify-content-between align-items-center'>
                        <h5>Shopping Cart</h5>
                        <IoMdClose onClick={onHandleCloseCart} className='close-cart' />
                    </div>
                    {items.map((item) => {
                        return (
                            <div key={item.product._id}>
                                <div className="cart-product d-flex align-items-center gap-2">
                                    <div className="cart-img">
                                        <img src={item.product.image} alt="food-name" />
                                    </div>
                                    <div>
                                        <h6>{item.product.name}</h6>
                                        <div className='cart-remove d-flex justify-content-between'>
                                            <p>
                                                {Intl.NumberFormat('pt-br', {
                                                    style: 'currency',
                                                    currency: 'BRL'
                                                }).format(item.product.price)}
                                            </p>
                                            <div  className='remove-product d-flex justify-content-center align-items-center'>
                                                <IoMdClose onClick={() => removeItem(item.product._id)}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div className="totalPrice mt-1 d-flex align-items-center justify-content-between">
                        <h5>Subtotal</h5>
                        <h5>
                            {Intl.NumberFormat('pt-br', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(cartTotal)}
                        </h5>
                    </div>
                    <div className='button-box'>
                        <button className='view-button'>View Cart</button>
                        <p className='mt-2' onClick={emptyCart}>Limpar carrinho</p>
                    </div>
                </div>
            )} */}
        </div>
    )
}