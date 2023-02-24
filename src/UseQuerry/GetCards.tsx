import { useQuery } from "react-query";
import { getData } from "../GetApi/GetApi";
export function useCards(){
    return useQuery("fetchCards", getData);
}