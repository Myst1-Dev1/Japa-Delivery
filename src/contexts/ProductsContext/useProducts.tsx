import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ProductsApi } from "../../services/api/api";
import { Product } from "../../Types/Product";

interface ProductContextData {
    products: Product[];
    setProducts:React.Dispatch<React.SetStateAction<Product[]>>;
    search:string;
    setSearch:React.Dispatch<React.SetStateAction<string>>;
    currentItens: Product[];
    handlePreviousPage:() => void;
    handleNextPage:() => void;
    pages:number;
    setCurrentPage:React.Dispatch<React.SetStateAction<number>>
}

interface ProductProviderProps {
    children: ReactNode;
}

export const ProductsContext = createContext<ProductContextData>(
    {} as ProductContextData
);

export function ProductsProvider({children}: ProductProviderProps) {
    const [products, setProducts] = useState<Product[]>([]);
    const [search, setSearch] = useState('');
    const [filterProducts, setFilterProducts] = useState([]);
    const [itensPerPage, setItensPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(0);

    async function getProducts() {
        const res = await ProductsApi.get();
        setProducts(res.data);
        setFilterProducts(res.data);
    }

    useEffect(() => {
        getProducts();
    },[])


    // filter

    const searchLowerCase = search.toLowerCase();
    function searchProduct() {
        if(search !== '') {
            setProducts(filterProducts.filter((e:any) => e.name.toLowerCase().includes(searchLowerCase)))
        }else {
            setProducts(filterProducts);
        }
    }

    useEffect(() => {
        searchProduct();
        // eslint-disable-next-line
    }, [search])

    // Pagination

    const pages = Math.ceil(products.length / itensPerPage);
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const currentItens = products.slice(startIndex, endIndex);

    function handlePreviousPage() {
        setCurrentPage(currentPage - 1);
        if(currentPage === 0) {
            setCurrentPage(currentPage);
        }
    }

    function handleNextPage() {
        setCurrentPage(currentPage + 1);
        if(currentPage === Array(pages).length - 1) {
            setCurrentPage(currentPage);
        }
    }

    useEffect(() => {
        setItensPerPage(itensPerPage);
        // eslint-disable-next-line
    }, [])

    return <ProductsContext.Provider value={{
        products, 
        setProducts, 
        search, 
        setSearch,
        currentItens,
        handleNextPage,
        handlePreviousPage,
        pages,
        setCurrentPage
        }}>
                {children}
            </ProductsContext.Provider>
}

export function useProducts() {
    const context = useContext(ProductsContext);

    return context;
}