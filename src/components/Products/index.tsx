import './style.scss';
import { BsSearch } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { ProductsApi } from '../../services/api/api';
import { Filter } from '../Filter';
import { Pagination } from '../Pagination';
import { ProductBox } from '../ProductBox';
import { Product } from '../../Types/Product';
import { CartProduct } from '../CartProducts';

interface ProductProps {
    onOpenCart:() => void
    onOpenCartProducts:boolean;
    onCloseCartProducts:() => void;
}

export interface IShoppingCartItem {
    product:Product;
    quantity:number;
}

export function Products ({ onOpenCart, onOpenCartProducts, onCloseCartProducts}: ProductProps) {

    const [products, setProducts] = useState<Product[]>([]);
    const [itensPerPage, setItensPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(0);
    const [shoppingCart, setShoppingCart] = useState<IShoppingCartItem[]>([]);

    const pages = Math.ceil(products.length / itensPerPage);
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const currentItens = products.slice(startIndex, endIndex);

    const totalCart = shoppingCart.reduce((total, current) => {
        return total + (current.product.price * current.quantity);
    }, 0)

    async function getProducts() {
        const res = await ProductsApi.get();
        setProducts(res.data);
    }

    function handleAddToCart(id:string) {
        const productItem = products.find(product => product._id === id)

        const alreadyInShoppingCart = shoppingCart.find(
            (item) => item.product._id === id)
        // if product is in the shopping cart
        if(alreadyInShoppingCart) {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
             const newShoppingCart: IShoppingCartItem[] = shoppingCart.map((item) => {
            //eslint-disable-next-line @typescript-eslint/no-unused-expressions
                if (item.product._id === id) ({
                    ...item,
                    quantity: item.quantity++
                });
                return item;
            });
            setShoppingCart(newShoppingCart);
            return;
        }

        const cartItem: IShoppingCartItem = {
            product:productItem!,
            quantity:1
        }
        const newShoppingCart: IShoppingCartItem[] = [...shoppingCart, cartItem]
        setShoppingCart(newShoppingCart);
    }

    function handleRemoveItemToCart(id:string) {
        const alreadyInShoppingCart = shoppingCart.find(
            (item) => item.product._id === id)

            if(alreadyInShoppingCart!.quantity > 1) {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
             const newShoppingCart: IShoppingCartItem[] = shoppingCart.map((item) => {
                //eslint-disable-next-line @typescript-eslint/no-unused-expressions
                    if (item.product._id === id) ({
                        ...item,
                        quantity: item.quantity--
                    });
                    return item;
                });
                setShoppingCart(newShoppingCart);
                return 
            }
        // if the is only one product with the id in the cart
        const newShoppingCart: IShoppingCartItem[] = shoppingCart.filter(item => item.product._id !== id);
        setShoppingCart(newShoppingCart);
    }

    function handleCleanCart() {
        setShoppingCart([]);
    }

    useEffect(() => {
        getProducts();
    }, [])

    // useEffect(() => {
    //     ProductsApi.get()
    //     .then(response => setProducts(response.data.products));
    // }, []);

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
                        onSetProducts = {setProducts}
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
                        <div key={product._id}>
                            <ProductBox
                                onProductOpenCart={onOpenCart}
                                productImage={product.image}
                                productName={product.name}
                                productPrice={product.price}
                                productDeletedPrice={product.deletedPrice}
                                onProducts={product}
                                onAddToCart = {handleAddToCart}
                            />
                        </div>
                    )
                })}
            </div>
            }
                <CartProduct 
                    onShoppingCart = {shoppingCart} 
                    onOpenCart = {onOpenCartProducts}
                    onCloseCart = {onCloseCartProducts}
                    onRemoveItemFromCart = {handleRemoveItemToCart}
                    onTotalCart = {totalCart}
                    onHandleCleanCart = {handleCleanCart}
                />

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