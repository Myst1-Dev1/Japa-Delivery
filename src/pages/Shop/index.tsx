import './style.scss';
import { BsSearch } from 'react-icons/bs';
import { ProductBox } from '../../components/ProductBox';
import { Pagination } from '../../components/Pagination';
import { useProducts } from '../../contexts/ProductsContext/useProducts';
import { Filter } from '../../components/Filter';


export function Shop() {
    const {products, currentItens} = useProducts();

    return (
        <div className='shop-page'>
            <div className='shop-banner d-flex justify-content-center align-items-center'>
                <div className='shop-banner-subtitles d-flex flex-column align-items-center gap-2'>
                    <h2>Loja</h2>
                    <p><a href="/">Inicio</a> / <span>Loja</span></p>
                </div>
            </div>
            <div className='shop-container container mt-4 mb-5'>
                <h2>Confira nossos produtos</h2>
                <div className='input-box mt-5 d-flex align-items-center'>
                    <Filter />
                    <div className="input-icon">
                        <BsSearch />
                    </div>
                </div>

                {products.length === 0 ? 
                    <p className='mt-5 text-center'>Não há produtos que correspondam a sua pesquisa 😭</p> 
                    : 
                    <div className='product-list mt-5 row m-auto container'>
                    {currentItens.map(product => {
                        return (
                            <div className='col-md-4' key={product._id}>
                                <ProductBox
                                    productImage={product.image}
                                    productName={product.name}
                                    productPrice={product.price}
                                    productDeletedPrice={product.deletedPrice}
                                    onProducts={product}
                                />
                            </div>
                        )
                    })}
                </div>
                }

                <Pagination />   

            </div>
        </div>
    )
}