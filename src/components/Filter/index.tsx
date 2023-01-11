import {useEffect} from 'react';
import { api } from '../../services/api/api';

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

    useEffect(() => {
        api.get('products')
        .then(response => onSetFilterProducts(response.data.products));
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