import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext/useCart';

import './style.scss';

export function CartProduct() {

    const {
        shoppingCart, 
        handleRemoveItemToCart, 
        totalCart, 
        handleCleanCart,
        openCart,
        handleCloseCart
    } = useCart();
        
    return (
        
        <div className="cart-container">
            {openCart && (
                <div className="shopping-cart d-flex justify-content-between flex-column">
                    
                    <div>

                        <div className='cart-box d-flex justify-content-between align-items-center'>
                            <h5>Carrinho de compras</h5>
                            <IoMdClose className='close-cart' onClick={handleCloseCart} />
                        </div>

                        {shoppingCart.length === 0 ? <p className='mt-3 text-center'>Não há produtos em seu carrinho 😭</p> :
                            <div>
                                {shoppingCart.map(item => {
                            return (
                                <div>
                                    <div key={item.product._id} className="cart-product d-flex align-items-center gap-2">
                                        <div className="cart-img">
                                            <img src={item.product.image} alt="food-name" />
                                        </div>
                                        <div>
                                            <h6>{item.quantity + 'x'} {item.product.name} </h6>
                                            <div className='cart-remove d-flex justify-content-between'>
                                                <p>
                                                    {Intl.NumberFormat('pt-br', {
                                                        style: 'currency',
                                                        currency: 'BRL'
                                                    }).format(item.quantity * item.product.price)} 
                                                </p>
                                                <div className='remove-product d-flex justify-content-center align-items-center' onClick={() => handleRemoveItemToCart(item.product._id)} >
                                                    <IoMdClose/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        
                        <div className="totalPrice mt-3 d-flex align-items-center justify-content-between">
                            <h5>Subtotal</h5>
                            <h5>
                                {Intl.NumberFormat('pt-br', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(totalCart)}
                                
                            </h5>
                        </div>
                            </div>
                        }

                    </div>

                    <div className='button-box'>
                        <Link to="/cart" className='view-button text-center'> Ver Carrinho </Link>
                        <p onClick={handleCleanCart} className='mt-2'>Limpar carrinho</p>
                    </div>
                </div>
            )}
        </div>
    )
}