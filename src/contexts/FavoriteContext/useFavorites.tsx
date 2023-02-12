import { useContext, createContext, useState, ReactNode } from 'react';
import { Product } from '../../Types/Product';
import { useProducts } from '../ProductsContext/useProducts';

interface FavoritesContextData {
    favorites:Favorites[];
    setFavorites:React.Dispatch<React.SetStateAction<Favorites[]>>;
    addProductToFavorites: (id:string) => void;
    handleRemoveProducToFavorites:(id:string) =>  void;
    handleCleanFavorites:() => void;
}

interface FavoriteProviderProps {
    children: ReactNode;
}

export const FavoritesContext = createContext<FavoritesContextData>(
    {} as FavoritesContextData
);

export interface Favorites {
    favorite: Product;
    quantity:number;
}

export function FavoritesProvider({children}: FavoriteProviderProps) {
    const [favorites, setFavorites] = useState<Favorites[]>([]);
    const { products } = useProducts();


    function addProductToFavorites(id:string) {
        const item = products.find(product => product._id === id);

        const alreadyInFavorites = favorites.find(
            (item) => item.favorite._id === id)
        if(alreadyInFavorites) {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            const newFavoriteItem:Favorites[] = favorites.map((item) => {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                if(item.favorite._id === id) ({
                    ...item,
                });
                return item;
            });
            setFavorites(newFavoriteItem);
            return;
        }

        const favoriteItem: Favorites = {
            favorite: item!,
            quantity:1
        }

        const newFavoriteItem:Favorites[] = [...favorites, favoriteItem]
        setFavorites(newFavoriteItem);

    }

    function handleRemoveProducToFavorites(id:string) {
        const alreadyInFavorites = favorites.find(
            (item) => item.favorite._id === id)
        if(alreadyInFavorites!.quantity > 1) {
            //eslint-disable-next-line @typescript-eslint/no-unused-expressions
            const newFavoriteItem: Favorites[] = favorites.map((item) => {
                //eslint-disable-next-line @typescript-eslint/no-unused-expressions
                if(item.favorite._id === id) ({
                    ...item,
                    quantity: item.quantity--
                });
                return item
            });
            setFavorites(newFavoriteItem);
            return;
        }
        const newFavoriteItem:Favorites[] = favorites.filter(item => item.favorite._id !== id);
        setFavorites(newFavoriteItem);
    }

    function handleCleanFavorites() {
        setFavorites([]);
    }

    return (
        <FavoritesContext.Provider value={{
            favorites,
            setFavorites,
            addProductToFavorites,
            handleRemoveProducToFavorites,
            handleCleanFavorites,
        }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export function useFavorites() {
    const context = useContext(FavoritesContext);

    return context;
}