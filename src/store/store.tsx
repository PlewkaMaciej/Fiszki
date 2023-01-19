import create from "zustand";
import { Card } from "../types/types";
interface CardState {
    card: Card[];
    addNewCard: (title: string, description: string) => void;
    addQuestionToCard: (id: string, title: string, description: string) => void;
}
export const useStore = create<CardState>((set) => ({
    card: [{
        title: "Fiszki Js",
        description: "to jest fiszka do nauki javascript",
        id:new Date().getTime(),
        questions: [
          {
      
            question: "czy warto sie uczyc js",
            answer: "tak warto",
          },
          {
           
            question:"trtrtrtr",
            answer:"trtrtr",
          }
        ],
      },],
    addNewCard: (title: string, description: string) => {
        set((state) => ({
            card: [
                ...state.card,
                {
                    title: title,
                    description: description,
                    id: new Date().getTime(),
                    questions: [],
                } as Card,
            ]
        }))
    },
    addQuestionToCard: (id: string, title: string, description: string) => {
        set((state) => ({
            card:state.card.map((card: Card, index)=>{
                if (card.id.toString() === id) {
                    return {
                        ...card,
                        questions: [
                            ...card.questions,
                            { id: index, question: title, answer: description },
                        ],
                    };
                }
                return card;
            })

        }))
    }
}))




