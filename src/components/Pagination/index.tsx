import './style.scss';
import {useEffect} from 'react';

interface PaginationProps {
    onPages: number;
    onSetCurrentPage: any;
    onSetItensPerPage: any;
    onItensPerPage: number;
    onCurrentPage:number;
}

export function Pagination({
    onPages, 
    onSetCurrentPage, 
    onSetItensPerPage,
    onItensPerPage,
    onCurrentPage
}
    :PaginationProps) {

        function handlePreviousPage() {
            if(onCurrentPage !== 0){
                onSetCurrentPage(onCurrentPage - 1)
            };
        }
    
        function handleNextPage() {
            if(onCurrentPage !== 0){
                onSetCurrentPage(onCurrentPage + 1);
            }
        }

        useEffect(() => {
            onSetItensPerPage(onItensPerPage);
            // eslint-disable-next-line
        }, [])

    return (
        <div className='d-flex justify-content-center pagination-products mt-5'>
            <button onClick={handlePreviousPage}>Anterior</button>
                    {Array.from(Array(onPages), (item, index) => {
                    return <div key={index}>
                            <button 
                                value={index} 
                                onClick={() => onSetCurrentPage(index)}
                            >
                                { index + 1}
                            </button>
                           </div>
                    })}
                    <button onClick={handleNextPage}>Próximo</button>
        </div>
    )
}