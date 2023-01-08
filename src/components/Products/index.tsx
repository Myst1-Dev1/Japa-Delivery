import './style.scss';
import {BsHeart, BsEye, BsSearch} from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { api } from '../../services/api/api';

const fiveStar = require('../../assets/images/fivestar.png');

interface Product {
    id: number;
    image: string;
    name: string;
    price:number;
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

    const searchLowerCase = search.toLowerCase();

    function searchProducts() {
        if(search !== '') {
            setProducts(filterProducts.filter((e:any) => e.name.toLowerCase().includes(searchLowerCase)))
        }else {
            setProducts(filterProducts);
        }
    }

    function handlePreviousPage() {
        setCurrentPage(currentPage - 1);
    }

    function handleNextPage() {
        setCurrentPage(currentPage + 1);
    }

    useEffect(() => {
        api.get('products')
        .then(response => setProducts(response.data.products));
    }, []);

    useEffect(() => {
        api.get('products')
        .then(response => setFilterProducts(response.data.products));
    }, []);

    useEffect(() => {
        searchProducts();
        // eslint-disable-next-line
    }, [search])

    useEffect(() => {
        setItensPerPage(itensPerPage);
        // eslint-disable-next-line
    }, [])
    
    return (
        <div className="products mt-5">
            <div className='container'>
                <h2 className='mb-4'>Produtos Populares</h2>
                <div className='input-box d-flex align-items-center'>
                    <input 
                        type="text" 
                        placeholder='Pesquisar'
                        value={search}
                        onChange={(e: any) => setSearch(e.target.value)}    
                    />
                    <div className="input-icon">
                        <BsSearch/>
                    </div>
                </div>
            </div>

            <div className='product-list container d-flex justify-content-evenly align-items-center mt-5'>
                {currentItens.map(product => {
                    return (
                        <div key={product.id} className="product-box mb-3 m-auto d-flex flex-column justify-content-center align-items-center gap-2">
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
            
                <div className="d-flex justify-content-center pagination-products mt-5">
                    <button onClick={handlePreviousPage}>Anterior</button>
                    {Array.from(Array(pages), (item, index) => {
                    return <div key={index}>
                            <button 
                                value={index} 
                                onClick={() => setCurrentPage(index)}
                            >
                                { index + 1}
                            </button>
                           </div>
                    })}
                            {/* <div>{currentPage > 1 && (
                                <div><button>...</button></div>
                            )}</div> */}
                    <button onClick={handleNextPage}>Próximo</button>
                </div>
        </div>
    )
}