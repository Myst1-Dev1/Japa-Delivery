import './style.scss';
import {BsHeart, BsEye} from 'react-icons/bs';
import { useCart } from 'react-use-cart'
import { useEffect } from 'react';
import { IProduct } from '../../types/Product';

const fiveStar = require('../../assets/images/fivestar.png');

interface ProductBoxProps {
    productImage: string;
    productName: string;
    productPrice: number;
    productDeletedPrice: number;
    onProducts: any;
    onAmount: number;
    onProductOpenCart:() => void
}

export function ProductBox({ productImage, productName, productPrice, productDeletedPrice, onProducts,onProductOpenCart }: ProductBoxProps) {
    const { addItem } = useCart();

    useEffect(() => {
        console.log('???', onProducts)
    })

    function handleAddProduct(){
        onProductOpenCart();
        console.log('produto?', onProducts)
        addItem(onProducts);
                
    }

    return (
        <div className="product-box mb-3 m-auto d-flex flex-column justify-content-center align-items-center gap-2">
            <div className="img-container">
                <img src={productImage} alt="takoyaki" />
            </div>
            <img src={fiveStar} alt="five-star" />
            <h4>{productName}</h4>
            <p>
                <span>{Intl.NumberFormat('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(productPrice)}</span> 
                <del>
                    {Intl.NumberFormat('pt-br', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(productDeletedPrice)}
                </del>
            </p>
            <button onClick={handleAddProduct}>Add To Cart</button>
            <div className='product-icon d-flex flex-column gap-2'>
                <BsHeart />
            </div>
            <div className="product-open-modal">
                <BsEye />
            </div>
        </div>
    )
}