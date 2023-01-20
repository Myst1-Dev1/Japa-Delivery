import './style.scss';
import {BsHeart, BsEye, BsSearch} from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { ProductsApi } from '../../services/api/api';
import { Filter } from '../Filter';
import { Pagination } from '../Pagination';

const fiveStar = require('../../assets/images/fivestar.png');
interface Product {
    _id: number;
    image: string;
    name: string;
    price:number;
    amount: number;
    deletedPrice: number;
}

export function Products () {
    const [products, setProducts] = useState<Product[]>([]);
    const [search, setSearch] = useState('');
    const [filterProducts, setFilterProducts] = useState([]);
    const [itensPerPage, setItensPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(0);

    const pages = Math.ceil(products.length / itensPerPage);
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const currentItens = products.slice(startIndex, endIndex);

    async function getProducts(){
        const res = await ProductsApi.get();
        setProducts(res.data);
    }

    useEffect(() => {
        getProducts();
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
                        searchProducts = {search} 
                        setSearchProducts = {setSearch}
                        onSetProducts = {setProducts}
                        onFilterProducts = {filterProducts}
                        onSetFilterProducts = {setFilterProducts}
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
                        <div key={product._id} className="product-box mb-3 m-auto d-flex flex-column justify-content-center align-items-center gap-2">
                            <div className="img-container">
                                <img src={product.image} alt="takoyaki" />
                            </div>
                            <img src={fiveStar} alt="five-star" />
                            <h4>{product.name}</h4>
                            <p>
                                <span>{Intl.NumberFormat('pt-br', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(product.price)}</span> 
                                <del>
                                    {Intl.NumberFormat('pt-br', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(product.deletedPrice)}
                                </del>
                            </p>
                            <button>Add To Cart</button>
                            <div className='product-icon d-flex flex-column gap-2'>
                                <BsHeart />
                            </div>
                            <div className="product-open-modal">
                                <BsEye />
                            </div>
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