import './style.scss';
import { IoMdClose } from 'react-icons/io';
import { useCart } from '../../contexts/CartContext/useCart';
import { Input } from '../../components/FormInput';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';


export function Cart (){

    const { shoppingCart, handleRemoveItemToCart, totalCart } = useCart();
    

    return (
        <div className='cart-page container py-5'>
            <h2>Carrinho de compras</h2>
            <div className='table-responsive py-3'>
                <table className='table table-bordered'>
                    <thead className='text-light text-center'>
                        <tr>
                            <th scope='col'>Imagem</th>
                            <th scope='col'>Nome</th>
                            <th scope='col'>Preço</th>
                            <th scope='col'>Quantidade</th>
                            <th scope='col'>Subtotal</th>
                            <th scope='col'>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                       {shoppingCart.map(item => {
                        return (
                            <tr key={item.product._id}>
                                <td className='td-image'><img src={item.product.image} alt="food" /></td>
                                <td><h5>{item.product.name}</h5></td>
                                <td><h5>
                                        {Intl.NumberFormat('pt-br', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        }).format(item.product.price)}    
                                    </h5>
                                </td>
                                <td><h5>{item.quantity}</h5></td>
                                <td>
                                    <h5>
                                        {Intl.NumberFormat('pt-br', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        }).format(item.quantity * item.product.price)}
                                    </h5>
                                </td>
                                <td><IoMdClose onClick={() => handleRemoveItemToCart(item.product._id)} className='icon fs-4' /></td>
                            </tr>
                        )
                       })}
                    </tbody>
                </table>
            </div>

            <div className="order mt-5 d-flex gap-3">
                    <div className='cupom-box'>
                        <h5 className='py-3 px-3'>Use o código do cupom</h5>
                        <div className='mt-4 px-3'>
                            <h6>Tem um código de cupom?</h6>
                            <Input placeholder='XXX' />
                            <Button className="mt-3 mb-3">Aplicar</Button>
                        </div>
                    </div>

                <div className="total-price-box">
                       <h5 className='py-3 px-3'>Preço total do pedido</h5>
                       <div className='price-box px-3 mt-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6>Subtotal</h6>
                                <h6>
                                    {Intl.NumberFormat('pt-br', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(totalCart)}
                                </h6>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6>Taxas</h6>
                                <h6>
                                    {Intl.NumberFormat('pt-br', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(totalCart)}
                                </h6>
                            </div>
                       </div>
                       <div className='d-flex justify-content-between align-items-center px-3 mt-4'>
                                <h6>Total</h6>
                                <h6>
                                    {Intl.NumberFormat('pt-br', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(totalCart)}
                                </h6>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <Button className="mt-4 px-3 mb-2">
                                <Link className='text-light' to="paymentpage"> Seguir para o pagamento </Link>
                            </Button>
                        </div>
                </div>
            </div>
            
        </div>
    )

}