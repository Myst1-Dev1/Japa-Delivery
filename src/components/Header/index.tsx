import { useContext, useEffect, useState } from 'react';
import { BsHeart, BsPerson, BsCart } from 'react-icons/bs';
import { HiBars3 } from 'react-icons/hi2';
import { IoMdClose } from 'react-icons/io'
import './style.scss';
import { useCart } from 'react-use-cart';
import {Button} from '../../components/Button/index';
import { AuthContext } from '../../contexts/Auth/AuthContext';
interface HeaderProps {
    onHandleOpenCart: () => void;
    onHandleCloseCart: () => void;
    onOpenCart: boolean;
}



export function Header({ onHandleOpenCart, onHandleCloseCart, onOpenCart }: HeaderProps) {
    const [openCart, setOpenCart] = useState(false);
    const [openResponsiveMenu, setOpenResponsiveMenu] = useState(false);

    const {
        items,
        removeItem,
        cartTotal,
        emptyCart
      } = useCart();

    const auth = useContext(AuthContext);

    function handleOpenCart() {
        setOpenCart(true);
    }
    function handleCloseCart() {
        setOpenCart(false);
    }

    function handleOpenResponsiveMenu() {
        setOpenResponsiveMenu(true);
    }
    function handleCloseResponsiveMenu() {
        setOpenResponsiveMenu(false);
    }

    useEffect(() => {
        
    },[auth.user])

    return (
        <div className='header'>
            <header className='d-flex justify-content-evenly align-items-center'>
                <h1>M&K Delivery</h1>
                <div className="navBar d-flex justify-content-between align-items-center">
                    <nav>
                        <ul className='d-flex align-items-center m-auto'>
                            <li><a href="/">INICIO</a></li>
                            <li><a href="/loja">LOJA</a></li>
                            <li><a href="/sobre">SOBRE</a></li>
                            <li><a href="/contato">CONTATO</a></li>
                        </ul>
                    </nav>
                </div>

                <div className="header-icons d-flex justify-content-between align-items-center me-4">

                    <div className="icon">
                        <BsCart onClick={onHandleOpenCart} style={{fontSize:'20px'}} />
                        <div className="items-in-cart">
                            <p>{items.length}</p>
                        </div>
                    </div>
                    <div className="icon ps-2">
                        <BsHeart style={{fontSize:'20px'}} />
                    </div>
                    {
                        auth.user ? (
                            <>
                                <div className="icon ps-2">
                                    <h6  style={{fontSize:'13px', textAlign: 'center'}} >{`${auth.user.firstname} ${auth.user.lastname}`}</h6>
                                </div>
                                <div className="icon ps-2">
                                    <a style={{fontSize:'13px'}}  onClick={auth.signOut}>Sair</a>
                                </div>
                            </>
                        )
                        :
                        (
                            <div className="icon ps-2">
                                <a href="/login" ><BsPerson style={{fontSize:'20px'}} className='icon' /></a>
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
                                  <a href="/">INICIO</a>
                              </div>
                              <div className="item-menu">
                                  <a href="/loja">LOJA</a>
                              </div>
                              <div className='item-menu'>
                                  <a href="/sobre">SOBRE</a>
                              </div>
                              <div className='item-menu'>
                                  <a href="/contato">CONTATO</a>
                              </div>
                          </div>
                    </div>
            }

            {/* Shopping cart */}
            {onOpenCart && (
                <div className="shopping-cart">
                    <div className='cart-box d-flex justify-content-between align-items-center'>
                        <h5>Shopping Cart</h5>
                        <IoMdClose onClick={onHandleCloseCart} className='close-cart' />
                    </div>
                    {items.map((item: any) => {
                        return (
                            <div key={item.id}>
                                <div className="cart-product d-flex align-items-center gap-2">
                                    <div className="cart-img">
                                        <img src={item.image} alt="food-name" />
                                    </div>
                                    <div>
                                        <h6>{item.name}</h6>
                                        <div className='cart-remove d-flex justify-content-between'>
                                            <p>
                                                {Intl.NumberFormat('pt-br', {
                                                    style: 'currency',
                                                    currency: 'BRL'
                                                }).format(item.price)}
                                            </p>
                                            <div  className='remove-product d-flex justify-content-center align-items-center'>
                                                <IoMdClose onClick={() => removeItem(item.id)}/>
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
                        
                        <a href="/cart" className='view-button'>View Cart</a>
                        {/* <Button className="w-100 mt-3">Checkout Now</Button> */}
                        <p className='mt-2' onClick={emptyCart}>Limpar carrinho</p>

                    </div>
                </div>
            )}
        </div>
    )
}