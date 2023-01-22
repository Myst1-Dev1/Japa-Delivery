import './style.scss';
import {MdAdd, MdRemove, MdShoppingCart} from 'react-icons/md'
import { useEffect, useState } from 'react';
import { getRemainingTimeUntilMsTimeStamp } from '../../utils/countDownTimerUtil';
import { useCart } from 'react-use-cart';

const harumaki = require('../../assets/images/harumaki.png');
const fiveStar = require('../../assets/images/fivestar.png')
const dorayaki = require('../../assets/images/dorayaki.png');
const lamen = require('../../assets/images/lamen.png');

interface defaultRemainingTimeProps {
    seconds: number | string;
    minutes: number | string;
    hours: number | string;
    days:number | string;
}

interface DealsHotProps {
    countDownTimeStampMs:number | string;
}

export function DealsHotProduct ({countDownTimeStampMs}: DealsHotProps ) {

    const { addItem,
            items,
            removeItem,
            cartTotal,
            emptyCart
            } 
     = useCart();

    const defaultRemainingTime:defaultRemainingTimeProps = {
        seconds: '00',
        minutes: '00',
        hours: '00',
        days: '00'
    }

    const topSellingProducts = [
        {
            id:1,
            image: `${harumaki}`,
            name:'Harumaki',
            price: 7.50,
            deletedPrice:13.45
        },
        {
            id:2,
            image: `${dorayaki}`,
            name:'Dorayaki',
            price: 13.90,
            deletedPrice:20.30
        },
        {
            id:3,
            image: `${lamen}`,
            name:'Lámen',
            price: 20.70,
            deletedPrice:32.00
        },
    ]

    const [amountProduct, setAmountProduct] = useState(1);
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    function handleAddProducts() {
        setAmountProduct(amountProduct + 1);
    }
    function handleRemoveProducts() {
        setAmountProduct(amountProduct - 1);
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countDownTimeStampMs);
        }, 1000);
        return () => clearInterval(intervalId);
    },[countDownTimeStampMs]);

    function updateRemainingTime(countDown:string | number) {
        setRemainingTime(getRemainingTimeUntilMsTimeStamp(countDown));
    }

    return (
        <div>
            <div className="container deals-hot d-flex justify-content-center align-items-center gap-4 mt-5 mb-5">
                <div className='deals-hot-container'>
                <h4>Oferta quente do dia</h4>
                    <div className='deals-hot-content d-flex align-items-center gap-4 mt-4'>
                        <div className="img-container"> 
                            <img src={harumaki} alt="harumaki" />
                        </div>
                        <div className='deals-hot-subtitles d-flex flex-column'>
                            <div className='d-flex flex-row gap-2'>
                                <div className='deals-hot-time'>
                                    <h5>{remainingTime.days}</h5>
                                    <span>Dias</span>
                                </div>
                                <div className='deals-hot-time'>
                                    <h5>{remainingTime.hours}</h5>
                                    <span>Horas</span>
                                </div>
                                <div className='deals-hot-time'>
                                    <h5>{remainingTime.minutes}</h5>
                                    <span>Minutos</span>
                                </div>
                                <div className='deals-hot-time'>
                                    <h5>{remainingTime.seconds}</h5>
                                    <span>Segundos</span>
                                </div>
                            </div>
                            <h3 className='mt-3'>Harumaki</h3>
                            <div className="price d-flex align-items-center gap-2">
                                <h4>R$:4,50</h4>
                                <del>R$:13,45</del>
                            </div>
                            <div className="reviews d-flex align-items-center gap-1">
                                <img src={fiveStar} alt="fivestar" />
                                <span>( 25 reviews )</span>
                            </div>
                            <p className='mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla nobis ratione, 
                                maxime
                            </p>
                            <div className="amount-product d-flex align-items-center gap-3">
                                <div className='d-flex'>
                                    <span onClick={handleRemoveProducts} className='text-center'><MdRemove /></span>
                                    <input 
                                        className='text-center'
                                        type="text" 
                                        value ={amountProduct}
                                        onChange={(e:any) => setAmountProduct(e.target.value)}
                                    />
                                    <span onClick={handleAddProducts} className='text-center'><MdAdd /></span>
                                </div>
                                <div className='add-to-cart d-flex align-items-center gap-2 m-auto'>
                                    <MdShoppingCart className='fs-4' />
                                    <h6 className='m-auto'>Adicionar ao carrinho</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='top-selling-products'>
                    <h4 className='mb-4'>Produtos mais vendidos</h4>
                    <div className='d-flex flex-column'>
                        {topSellingProducts.map(product => {
                            return (
                                <div key={product.id} className="product-box d-flex align-items-center gap-2">
                                    <img src={product.image} alt="harumaki" />
                                    <div className='product-box-subtitles'>
                                        <h6>{product.name}</h6>
                                        <img src={fiveStar} alt="fivestar" />
                                        <div className="price d-flex align-items-center gap-1">
                                        <h6>
                                            {Intl.NumberFormat('pt-br', {
                                                style: 'currency',
                                                currency: 'BRL'
                                            }).format(product.price)}
                                        </h6>
                                        <del>
                                            {Intl.NumberFormat('pt-br', {
                                                    style: 'currency',
                                                    currency: 'BRL'
                                                }).format(product.deletedPrice)}
                                        </del>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div> 
        </div>
    )
}