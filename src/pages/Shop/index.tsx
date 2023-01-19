import './style.scss';
import { BsSearch } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { api } from '../../services/api/api';
import { ProductBox } from '../../components/ProductBox';
import { Pagination } from '../../components/Pagination';

interface allProduct {
    id: number;
    image: string;
    name: string;
    price:number;
    deletedPrice: number;
}

interface ShopProps {
    onHandleOpenCart:() => void
}

export function Shop({ onHandleOpenCart }: ShopProps) {
    const [allProducts, setAllProducts] = useState<allProduct[]>([])
    const [itensPerPage, setItensPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(0);
    const [search, setSearch] = useState('');
    const [filterProducts, setFilterProducts] = useState([]);

    const pages = Math.ceil(allProducts.length / itensPerPage);
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const currentItens = allProducts.slice(startIndex, endIndex);

    const searchLowerCase = search.toLowerCase();
    function searchProduct() {
        if(search !== '') {
            setAllProducts(filterProducts.filter((e:any) => e.name.toLowerCase().includes(searchLowerCase)))
        }else {
            setAllProducts(filterProducts);
        }
    }

    useEffect(() => {
        api.get('allProducts')
        .then(response => setAllProducts(response.data.allProducts));
    }, [])

    useEffect(() => {
        api.get('allProducts')
        .then(response => setFilterProducts(response.data.allProducts));
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        searchProduct();
        // eslint-disable-next-line
    }, [search])

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
                    <input 
                        type="text" 
                        placeholder='Pesquisar'
                        value={search}
                        onChange={(e: any) => setSearch(e.target.value)}
                    />
                    <div className="input-icon">
                        <BsSearch />
                    </div>
                </div>

                {allProducts.length === 0 ? 
                    <p className='mt-5 text-center'>Não há produtos que correspondam a sua pesquisa 😭</p> 
                    : 
                    <div className='product-list mt-5 d-flex justify-content-evenly align-items-center container'>
                    {currentItens.map(product => {
                        return (
                            <div key={product.id}>
                                <ProductBox
                                    onProductOpenCart = {onHandleOpenCart}
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
        </div>
    )
}