import { create } from 'zustand'
import { getData } from '../GetApi/GetApi';
import { Card } from "../types/types";
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../FirebaseConfig/FirebaseConfig';
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
        set((state) => {
            const newCard: Card = {
                title,
                description,
                id: new Date().getTime().toString(),
                questions: []
            };
            setDoc(doc(db, "Card", newCard.id), {
                Card: {
                    title: newCard.title,
                    description: newCard.description,
                    questions: newCard.questions
                }
            });
            return {
                ...state,
                card: [...state.card, newCard]
            };
        });
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




