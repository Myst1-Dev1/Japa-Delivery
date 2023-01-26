import { Button } from '../../components/Button';
import { Input } from '../../components/FormInput';
import { useCart } from '../../contexts/CartContext/useCart';
import './style.scss';

export function PaymentPage() {
    const { totalCart } = useCart();

    return(
        <div className='payment-page container py-5'>
            <div className='d-flex justify-content-center align-items-center payment-container gap-5'>
                <div className='payment-details'>
                    <h5>Detalhes de cobrança</h5>
                   <div className='mt-3 d-flex flex-column gap-3'>
                    <div className='d-flex gap-3'>
                            <div>
                            <label htmlFor="first-name">Primeiro Nome *</label>
                            <Input type="text" id='first-name' />
                            </div>
                            <div>
                            <label htmlFor="last-name">Ultimo Nome *</label>
                            <Input type="text" id='last-name' />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email">E-mail *</label>
                            <Input type="e-mail" id='email' />
                        </div>
                        <div>
                            <label htmlFor="telefone">Telefone *</label>
                            <Input type="tel" id='telefone' />
                        </div>
                        <div>
                            <label htmlFor="cep">CEP *</label>
                            <Input type="number" id='cep' />
                        </div>
                        <div className='d-flex flex-column'>
                            <label htmlFor="aditional-informations">Informações adicionais *</label>
                            <textarea id='aditional-informations'></textarea>
                        </div>
                   </div>
                </div>
                <div className='d-flex flex-column gap-3'>
                    <div className="order-summary">
                        <h5 className='mb-5'>Resumo do pedido</h5>
                        <div className='d-flex flex-column gap-3'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6>Subtotal</h6>
                                <h6>{Intl.NumberFormat('pt-br', {
                                    style:'currency',
                                    currency:'BRL'
                                }).format(totalCart)}</h6>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6>Cupom</h6>
                                <h6>R$ 0</h6>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6>Total</h6>
                                <h6>{Intl.NumberFormat('pt-br', {
                                    style:'currency',
                                    currency:'BRL'
                                }).format(totalCart)}</h6>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='fw-bold'>Total a pagar</h6>
                                <h6 className='fw-bold'>{Intl.NumberFormat('pt-br', {
                                    style:'currency',
                                    currency:'BRL'
                                }).format(totalCart)}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="payment-methods">
                        <h5 className='mb-4'>Metodos de pagamento</h5>
                        <div className='d-flex flex-column gap-2'>
                            <div className='d-flex gap-2'>
                                <input type="checkbox" id='bank-transfer' />
                                <label htmlFor="bank-transfer">Transferência bancaria</label>
                            </div>
                            <div className='d-flex gap-2'>
                                <input type="checkbox" id='cash-delivery' />
                                <label htmlFor="cash-delivery">Dinheiro na entrega</label>
                            </div>
                            <div className='d-flex gap-2'>
                                <input type="checkbox" id='check-payments' />
                                <label htmlFor="check-payments">Verificar pagamentos</label>
                            </div>
                            <div className='d-flex gap-2'>
                                <input type="checkbox" id='paypal' />
                                <label htmlFor="paypal">Paypal</label>
                            </div>
                        </div>
                        <Button className="mt-4">Fazer encomenda</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}