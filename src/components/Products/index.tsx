import './style.scss';
import { BsSearch } from 'react-icons/bs';
import { Filter } from '../Filter';
import { Pagination } from '../Pagination';
import { ProductBox } from '../ProductBox';
import { useProducts } from '../../contexts/ProductsContext/useProducts';

export function Products () {
    // const uploadAPI = process.env.UPLOADS;
    const {products, currentItens} = useProducts();

    return (
        <div className="products mt-5">
            <div className='container'>
                <h2 className='mb-4'>Produtos Populares</h2>
                <div className='input-box d-flex align-items-center'>
                    <Filter />
                    <div className="input-icon">
                        <BsSearch/>
                    </div>
                </div>
            </div>

            {products.length === 0 ?
                <p className='mt-5 text-center'>Não há produtos que correspondam a sua pesquisa 😭</p> 
                : 
                <div className='product-list container row m-auto mt-5'>
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
    )
}