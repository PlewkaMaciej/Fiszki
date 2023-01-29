import { create } from 'zustand'
import { getData } from '../GetApi/GetApi';
import { Card } from "../types/types";
interface CardState {
    card: Card[];
    addNewCard: (title: string, description: string) => void;
    addQuestionToCard: (id: string, title: string, description: string) => void;
    fetch: () => void;
}

export const useStore = create<CardState>((set) => ({
    fetch: () => {
        getData().then((datas) => {
            set({ card: datas });
        })
    },
    card: [],
    addNewCard: (title: string, description: string) => {
        set((state) => ({
            card: [
                ...state.card,
                {
                    title: title,
                    description: description,
                    id: new Date().getTime().toString(),
                    questions: [],
                } as Card,
            ]
        }))
    },
    addQuestionToCard: (id: string, title: string, description: string) => {
        set((state) => ({
            card: state.card.map((card: Card, index) => {
                if (card.id.toString() === id) {
                    return {
                        ...card,
                        questions: [
                            ...card.questions,
                            { question: title, answer: description },
                        ],
                    };
                }
                return card;
            })

        }))
    }
}))




