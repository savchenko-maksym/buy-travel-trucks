import { createContext, useContext } from "react";

const FavoritesContext = createContext();
export const useFavorites = () => useContext(FavoritesContext);
