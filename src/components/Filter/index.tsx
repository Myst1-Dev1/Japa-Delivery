import { useState ,useEffect } from 'react';
import { ProductsApi } from '../../services/api/api';

interface FilterProps{
    onSetProducts: any;
}

export function Filter({
    onSetProducts}
    : FilterProps) {
    
    const [search, setSearch] = useState('');
    const [filterProducts, setFilterProducts] = useState([]);

    const searchLowerCase = search.toLowerCase();
    function searchProduct() {
        if(search !== '') {
            onSetProducts(filterProducts.filter((e:any) => e.name.toLowerCase().includes(searchLowerCase)))
        }else {
            onSetProducts(filterProducts);
        }
    }

    async function getProducts() {
        const res = await ProductsApi.get();
        setFilterProducts(res.data);
    }

    useEffect(() => {
        getProducts()
    }, []);

    // useEffect(() => {
    //     ProductsApi.get()
    //     .then(response => setFilterProducts(response.data.products));
    //     // eslint-disable-next-line
    // }, []);

    useEffect(() => {
        searchProduct();
        // eslint-disable-next-line
    }, [search])

    return (
        <input 
        type="text" 
        placeholder='Pesquisar'
        value={search}
        onChange={(e: any) => setSearch(e.target.value)}
        />
    )
}