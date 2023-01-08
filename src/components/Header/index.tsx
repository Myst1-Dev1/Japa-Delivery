import { useState } from 'react';
import { BsHeart, BsPerson, BsCart } from 'react-icons/bs';
import { HiBars3 } from 'react-icons/hi2';
import { IoMdClose } from 'react-icons/io'
import './style.scss';
import {Button} from '../../components/Button/index';

// const takoyaki = require('../../assets/images/takoyaki.png');
// const guioza = require('../../assets/images/guioza.png');
// const lamen = require('../../assets/images/lamen.png');
// const harumaki = require('../../assets/images/harumaki.png');

// const cartProduct = [
//     {
//         id: 1,
//         image: `${takoyaki}`,
//         name: "Takoyaki",
//         price: 45
//     },
//     {
//         id: 2,
//         image: `${guioza}`,
//         name: "Guioza",
//         price: 12.5
//     },
//     {
//         id: 3,
//         image: `${lamen}`,
//         name: "Lámen",
//         price: 20.7
//     },
//     {
//         id: 4,
//         image: `${harumaki}`,
//         name: "Harumaki",
//         price: 7.5
//     },  
// ]

export function Header() {
    const [openCart, setOpenCart] = useState(false);
    const [openResponsiveMenu, setOpenResponsiveMenu] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

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

    //     let sum = 0
    //     for (let i = 0; i < cartProduct.length; i++) {
    //         sum += cartProduct[i].price;
    //     }

    // useEffect(() => {
    //     setTotalPrice(sum);
    // }, [])
        

    return (
        <div className='header'>
            <header className='d-flex justify-content-between align-items-center'>
                <h1 className=''>M&K Delivery</h1>
                <div className="navBar d-flex justify-content-between align-items-center">
                    <nav>
                        <ul className='d-flex align-items-center m-auto'>
                            <li><a href="/">INICIO</a></li>
                            <li><a href="/">LOJA</a></li>
                            <li><a href="/">SOBRE</a></li>
                            <li><a href="/">PÁGINAS</a></li>
                            <li><a href="/">CONTATO</a></li>
                        </ul>
                    </nav>
                </div>

                <div className="header-icons d-flex justify-content-between align-items-center">
                    <div className="icon">
                        <BsCart onClick={handleOpenCart} />
                    </div>
                    <div className="icon">
                        <BsHeart />
                    </div>
                    <div className="icon">
                        <a href="/login"><BsPerson /></a>
                    </div>
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
                                  <a href="/">HOME</a>
                              </div>
                              <div className="item-menu">
                                  <a href="/">SHOP</a>
                              </div>
                              <div className='item-menu'>
                                  <a href="/">ABOUT</a>
                              </div>
                              <div className='item-menu'>
                                  <a href="/">PAGES</a>
                              </div>
                              <div className='item-menu'>
                                  <a href="/">CONTACT</a>
                              </div>
                          </div>
                    </div>
            }



            {/* Shopping cart */}
            {openCart && (
                <div className="shopping-cart">
                    <div className='cart-box d-flex justify-content-between align-items-center'>
                        <h5>Shopping Cart</h5>
                        <IoMdClose onClick={handleCloseCart} className='close-cart' />
                    </div>
                    {/* {cartProduct.map(cart => {
                        return (
                            <div key={cart.id} className="cart-product d-flex align-items-center gap-2">
                                <div className="cart-img">
                                    <img src={cart.image} alt="takoyaki" />
                                </div>
                                <div>
                                    <h6>{cart.name}</h6>
                                    <div className='cart-remove d-flex justify-content-between'>
                                        <p>
                                            {Intl.NumberFormat('pt-br', {
                                                style: 'currency',
                                                currency: 'BRL'
                                            }).format(cart.price)}
                                        </p>
                                        <div className='remove-product d-flex justify-content-center align-items-center'>
                                            <IoMdClose/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })} */}
                    <div className="totalPrice mt-1 d-flex align-items-center justify-content-between">
                        <h5>Subtotal</h5>
                        <h5>
                            {Intl.NumberFormat('pt-br', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(totalPrice)}
                        </h5>
                    </div>
                    <div className='button-box'>
                        <button className='view-button'>View Cart</button>
                        <Button className="w-100 mt-3">Checkout Now</Button>
                    </div>
                </div>
            )}
        </div>
    )
}