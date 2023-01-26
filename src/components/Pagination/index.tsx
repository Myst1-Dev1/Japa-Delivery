import './style.scss';
import { useProducts } from '../../contexts/ProductsContext/useProducts';

export function Pagination() {
    const { handlePreviousPage, handleNextPage, pages, setCurrentPage } = useProducts()

    return (
        <div className='d-flex justify-content-center pagination-products mt-5'>
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
                    <button onClick={handleNextPage}>Próximo</button>
        </div>
    )
}