import './style.scss';
import {BsHeart, BsEye} from 'react-icons/bs';
import { Product } from '../../Types/Product';
import { useCart } from '../../contexts/CartContext/useCart';
import { useProducts } from '../../contexts/ProductsContext/useProducts';

const fiveStar = require('../../assets/images/fivestar.png');

interface ProductBoxProps {
    productImage: string;
    productName: string;
    productPrice: number;
    productDeletedPrice: number;
    onProducts:Product;
}

export function ProductBox({ 
    productImage, 
    productName, 
    productPrice, 
    productDeletedPrice, 
    onProducts, 

}: ProductBoxProps) {

    const { handleAddToCart, handleOpenCart } = useCart();


    function handleAddProduct(){
        handleAddToCart(onProducts._id)
        handleOpenCart();
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
                <BsHeart className='heart-icon' />
            </div>
            <div className="product-open-modal">
                <BsEye />
            </div>
        </div>
    )
}