import './style.scss';
import { BsSearch } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { api } from '../../services/api/api';
import { Filter } from '../Filter';
import { Pagination } from '../Pagination';
import { ProductBox } from '../ProductBox';

export interface Product {
    id: number;
    image: string;
    name: string;
    price:number;
    deletedPrice: number;
}

interface ProductProps {
    onOpenCart:() => void
}

export function Products ({ onOpenCart }: ProductProps) {

    const [products, setProducts] = useState<Product[]>([]);
    const [itensPerPage, setItensPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(0);

    const pages = Math.ceil(products.length / itensPerPage);
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const currentItens = products.slice(startIndex, endIndex);

    useEffect(() => {
        api.get('products')
        .then(response => setProducts(response.data.products));
    }, []);

    useEffect(() => {
        setItensPerPage(itensPerPage);
        // eslint-disable-next-line
    }, [])
    
    return (
        <div className="products mt-5">
            <div className='container'>
                <h2 className='mb-4'>Produtos Populares</h2>
                <div className='input-box d-flex align-items-center'>
                    <Filter 
                        onSetProducts = {setProducts}
                    />
                    <div className="input-icon">
                        <BsSearch/>
                    </div>
                </div>
            </div>

            {products.length === 0 ?
                <p className='mt-5 text-center'>Não há produtos que correspondam a sua pesquisa 😭</p> 
                : 
                <div className='product-list container d-flex justify-content-evenly align-items-center mt-5'>
                {currentItens.map(product => {
                    return (
                        <div key={product.id}>
                            <ProductBox
                                onProductOpenCart={onOpenCart}
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
                <Pagination 
                    onPages = {pages}
                    onSetCurrentPage = {setCurrentPage}
                    onCurrentPage = {currentPage}
                    onSetItensPerPage = {setItensPerPage}
                    onItensPerPage = {itensPerPage}
                />
        </div>
    )
}