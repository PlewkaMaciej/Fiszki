import { useQuery } from "react-query";
import { getFilteredCards } from "../GetApi/GetFilteredCards";
export const useFilteredCards = (category: string) => {
    return useQuery(["fetchUserCards", category], () => getFilteredCards(category));
  };