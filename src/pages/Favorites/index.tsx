import './style.scss';
import { FaTimes } from 'react-icons/fa';
import { useFavorites } from '../../contexts/FavoriteContext/useFavorites';
import { useCart } from '../../contexts/CartContext/useCart';
import { Link } from 'react-router-dom';

export function Favorites() {
   const { favorites, handleRemoveProducToFavorites, handleCleanFavorites } = useFavorites();
   const { handleAddToCart, handleOpenCart } = useCart();

   function handleAddFavoriteProductToCart(id:string){
    handleAddToCart(id);
    handleOpenCart()
   }

    return (
        <div className="favorites container mt-5 mb-5">
            <div className='d-flex justify-content-between align-items-center'>
                <h2>Lista de favoritos</h2>
                <p className='fw-bold'>{favorites.length} item</p>
            </div>
            <div className="container py-5">
               {favorites.length === 0 ? <p>Você não tem nenhum produto favorito 😭</p> : 
                <>
                    {favorites.map(favorite => {
                        return (
                            <div className='favorite-container mb-4 d-flex justify-content-between align-items-center' key={favorite.favorite._id}>
                                <div className='favorite-box d-flex gap-3'>
                                    <img src={favorite.favorite.image} alt="favorite" />
                                    <h5 className='fw-bold'>{favorite.favorite.name}</h5>
                                </div>
                                <div className='favorite-buy'>
                                    <p onClick={() => handleAddFavoriteProductToCart(favorite.favorite._id)} className='fw-bold'>Adicionar ao carrinho</p>
                                    <Link to="/loja"><p className='fw-bold'>Compre agora</p></Link>
                                </div>
                                <div>
                                    <p>{Intl.NumberFormat('pt-br', {
                                        style:'currency',
                                        currency:'BRL'
                                    }).format(favorite.favorite.price)}</p>
                                    <FaTimes onClick={() => handleRemoveProducToFavorites(favorite.favorite._id)} className='icon' />
                                </div>
                            </div>
                        )
                   })}
                   <div className='favorite-box d-flex justify-content-between align-items-center'>
                        <Link to="/loja"><p className='fw-bold'>Continuar comprando</p></Link>
                        <p onClick={handleCleanFavorites} className='fw-bold'>Limpar favoritos</p>
                     </div>
                </>
               }
               
            </div>
        </div>
    )
}