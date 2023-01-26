import { createContext, useState , useContext, ReactNode } from 'react';
import { IShoppingCartItem } from '../../Types/ShoppingCart';
import { useProducts } from '../ProductsContext/useProducts';

interface CartContextData {
    shoppingCart: IShoppingCartItem[];
    handleAddToCart:(id:string) => void;
    handleRemoveItemToCart:(id:string) => void;
    handleCleanCart:() => void;
    totalCart:number;
    openCart:boolean;
    handleOpenCart:() => void;
    handleCloseCart:() => void;
}

interface CartProviderProps {
    children: ReactNode
}

export const CartContext = createContext<CartContextData>(
    {} as CartContextData
);

export function CartProvider({children}: CartProviderProps) {
    const {products} = useProducts();

    const [shoppingCart, setShoppingCart] = useState<IShoppingCartItem[]>([]);
    const [openCart, setOpenCart] = useState(false);

    const totalCart = shoppingCart.reduce((total, current) => {
        return total + (current.product.price * current.quantity);
    }, 0)

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

    function handleOpenCart() {
        setOpenCart(true);
    }
    function handleCloseCart() {
        setOpenCart(false);
    }

    return <CartContext.Provider value={{
        shoppingCart, 
        handleAddToCart, 
        handleRemoveItemToCart, 
        handleCleanCart, 
        totalCart, 
        openCart,
        handleCloseCart,
        handleOpenCart
        }}>
                {children}
            </CartContext.Provider>
}

export function useCart() {
    const context = useContext(CartContext);

    return context;
}