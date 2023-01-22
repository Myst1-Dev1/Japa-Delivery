import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { IShoppingCartItem } from '../Products';
import './style.scss';

interface CartProductProps {
    onShoppingCart:IShoppingCartItem[];
    onOpenCart:boolean;
    onCloseCart:() => void;
    onRemoveItemFromCart:(id:string) => void;
    onTotalCart:number;
    onHandleCleanCart:() => void
}

export function CartProduct({
    onShoppingCart, 
    onOpenCart, 
    onCloseCart, 
    onRemoveItemFromCart, 
    onTotalCart,
    onHandleCleanCart
    }: CartProductProps) {
    return (
        <div className="cart-container">
            {onOpenCart && (
                <div className="shopping-cart d-flex justify-content-between flex-column">
                    
                    <div>

                        <div className='cart-box d-flex justify-content-between align-items-center'>
                            <h5>Shopping Cart</h5>
                            <IoMdClose className='close-cart' onClick={onCloseCart} />
                        </div>

                        {onShoppingCart.map(item => {
                            return (
                                <div>
                                    <div key={item.product._id} className="cart-product d-flex align-items-center gap-2">
                                        <div className="cart-img">
                                            <img src={item.product.image} alt="food-name" />
                                        </div>
                                        <div>
                                            <h6>{item.quantity} Harumaki</h6>
                                            <div className='cart-remove d-flex justify-content-between'>
                                                <p>
                                                    {Intl.NumberFormat('pt-br', {
                                                        style: 'currency',
                                                        currency: 'BRL'
                                                    }).format(item.quantity * item.product.price)} 
                                                </p>
                                                <div className='remove-product d-flex justify-content-center align-items-center'>
                                                    <IoMdClose onClick={() => onRemoveItemFromCart(item.product._id)} />
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
                                }).format(onTotalCart)}
                                
                            </h5>
                        </div>

                    </div>

                    <div className='button-box'>
                        <Link to="/cart" className='view-button text-center'> Ver Carrinho </Link>
                        <p onClick={onHandleCleanCart} className='mt-2'>Limpar carrinho</p>
                    </div>
                </div>
            )}
        </div>
    )
}