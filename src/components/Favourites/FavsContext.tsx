import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Product {
    id: number;
    image: string;
    title: string;
    price: number;
}

interface FavsContextType {
    favs: Product[];
    addToFavs: (product: Product) => void;
    removeFromFavs: (id: number) => void;
}

const FavsContext = createContext<FavsContextType | undefined>(undefined);

export const FavsProvider = ({ children }: { children: ReactNode }) => {
    const [favs, setFavs] = useState<Product[]>([]);

    const addToFavs = (product: Product) => {
        setFavs(prevFavs => [...prevFavs, product]);
    };

    const removeFromFavs = (id: number) => {
        setFavs(prevFavs => prevFavs.filter(product => product.id !== id));
    };

    return (
        <FavsContext.Provider value={{ favs, addToFavs, removeFromFavs }}>
            {children}
        </FavsContext.Provider>
    );
};

export const useFavs = () => {
    const context = useContext(FavsContext);
    if (!context) {
        throw new Error('useFavs must be used within a FavsProvider');
    }
    return context;
};