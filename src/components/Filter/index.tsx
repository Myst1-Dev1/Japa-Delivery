import { useProducts } from '../../contexts/ProductsContext/useProducts';


export function Filter() {

    const { search, setSearch } = useProducts();

    return (
        <input 
        type="text" 
        placeholder='Pesquisar'
        value={search}
        onChange={(e: any) => setSearch(e.target.value)}
        />
    )
}