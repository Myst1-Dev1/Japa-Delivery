import './style.scss';
import { FaTrashAlt } from 'react-icons/fa';

const harumaki = require('../../assets/images/harumaki.png');
const takoyaki = require('../../assets/images/takoyaki.png');
const hotRoll = require('../../assets/images/hotRoll.png');

const FavoriteFoods = [
    {
        id:1,
        image:`${harumaki}`,
        name:'Harumaki',
        price:12,
        deletedPrice:18.50
    },
    {
        id:2,
        image:`${takoyaki}`,
        name:'Takoyaki',
        price:24,
        deletedPrice:31.50
    },
    {
        id:3,
        image:`${hotRoll}`,
        name:'Hot Roll',
        price:15,
        deletedPrice:19.70
    },
]

export function Favorites() {
    return (
        <div className="favorites container mt-5 mb-5">
            <h2>Lista de favoritos</h2>

            <div className="favorite-container container d-flex justify-content-evenly align-items-center mb-5">
                {FavoriteFoods.map(favorite => {
                    return (
                        <div>
                            <div key={favorite.name} className="favorite-box d-flex flex-column gap-2 justify-content-center align-items-center mt-5">
                                <div className="img-container">
                                    <img src={favorite.image} alt="favorite-product" />
                                </div>
                                <h5>{favorite.name}</h5>
                                <p className='d-flex gap-1'>
                                    {Intl.NumberFormat('pt-br', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(favorite.price)}
                                    <del>
                                        {Intl.NumberFormat('pt-br', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        }).format(favorite.deletedPrice)}    
                                    </del>
                                </p>
                                <button>Add to cart</button>
                                <FaTrashAlt className='icon' />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}