import create from "zustand";
import { Card } from "../types/types";
interface CardState{
    Card:Card[];
    addNewCard:(title:string,description:string)=>void;
}
export const useStore = create<CardState>((set)=>({
Card:[],
addNewCard:(title:string,description:string)=>{
set((state)=>({
Card:[
    ...state.Card,
    {
        title: title,
        description: description,
        id:new Date().getTime(),
        questions: [],  
    } as Card,
]
}))

}
}))




