import { create } from "zustand";
import type { Product } from "../features/products/types";

interface FavoritesState {
    favorites: Product[];

    toggleFavorite: (product: Product) => void;
    removeFavorite: (id: number) => void;
}

export const useFavoritesStore = create<FavoritesState>((set) => ({
    favorites: [],

    toggleFavorite: (product) =>
        set((state) => {
            const exists = state.favorites.some(
                (item) => item.id === product.id
            );

            if (exists) {
                return {
                    favorites: state.favorites.filter(
                        (item) => item.id !== product.id
                    ),
                };
            }

            return {
                favorites: [
                    ...state.favorites,
                    product,
                ],
            };
        }),

    removeFavorite: (id) =>
        set((state) => ({
            favorites: state.favorites.filter(
                (item) => item.id !== id
            ),
        })),
}));