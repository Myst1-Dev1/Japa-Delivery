import {useEffect} from 'react';
import { ProductsApi } from '../../services/api/api';

interface FilterProps{
    searchProducts: string;
    setSearchProducts:any;
    onSetProducts: any;
    onFilterProducts: any;
    onSetFilterProducts:any;
}

export function Filter({
    searchProducts, 
    setSearchProducts, 
    onSetProducts,
    onFilterProducts,
    onSetFilterProducts}
    : FilterProps) {

    const searchLowerCase = searchProducts.toLowerCase();
    function searchProduct() {
        if(searchProducts !== '') {
            onSetProducts(onFilterProducts.filter((e:any) => e.name.toLowerCase().includes(searchLowerCase)))
        }else {
            onSetProducts(onFilterProducts);
        }
    }

    async function getProducts(){
        const res = await ProductsApi.get();
        onSetFilterProducts(res.data);
    }

    useEffect(() => {
        getProducts();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        searchProduct();
        // eslint-disable-next-line
    }, [searchProducts])

    return (
        <input 
        type="text" 
        placeholder='Pesquisar'
        value={searchProducts}
        onChange={(e: any) => setSearchProducts(e.target.value)}
        />
    )
}