import './style.scss';
import { BsEye } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';
import { Product } from '../../Types/Product';
import { useCart } from '../../contexts/CartContext/useCart';
import { useFavorites } from '../../contexts/FavoriteContext/useFavorites';

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

    const { favorites, addProductToFavorites } = useFavorites()

    const isFavorite = favorites.find((product) => product.favorite._id === onProducts._id);

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
            <button onClick={handleAddProduct}>Adicionar ao carrinho</button>
            <div className='product-icon d-flex flex-column gap-2'>
                <FaHeart onClick={() => addProductToFavorites(onProducts._id)} className={isFavorite ? "text-danger" : "text-dark"} />
            </div>
            <div className="product-open-modal">
                <BsEye />
            </div>
        </div>
    )
}