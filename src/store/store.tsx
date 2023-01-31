import { create } from 'zustand'
import { getData } from '../GetApi/GetApi';
import { Card } from "../types/types";
import { setDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../FirebaseConfig/FirebaseConfig';
interface CardState {
    card: Card[];
    addNewCard: (title: string, description: string) => void;
    addQuestionToCard: (id: string, title: string, description: string, clickedCard: Card[]) => void;
    fetch: () => void;
    isUserLoggedIn: boolean,
    setUserLoginIn:()=>void,
}

export const useStore = create<CardState>((set) => ({
    
    isUserLoggedIn:false,
    setUserLoginIn: () => set((state) => ({ ...state, isUserLoggedIn: true })),
    fetch: () => {
        getData().then((datas) => {
            set({ card: datas });
        })
    },
    card: [],
    addNewCard: async (title: string, description: string) => {
        const newCard: Card = {
            title,
            description,
            id: new Date().getTime().toString(),
            questions: []
        };
        try {
            await setDoc(doc(db, "Card", newCard.id), {
                Card: {
                    title: newCard.title,
                    description: newCard.description,
                    questions: newCard.questions,
                    id: new Date().getTime().toString(),
                }
            });
        } catch (error) {
            console.log(error);
        }
    },
    addQuestionToCard: async (id: string, title: string, description: string, clickedCard) => {
       
        const cardId = clickedCard.findIndex((card: Card) => card.id === id);
        const updatedCard = { ...clickedCard[cardId], questions: [...clickedCard[cardId].questions, { question: title, answer: description }] };
        set((state) => ({
            ...state,
            card: [...state.card.slice(0, cardId), updatedCard, ...state.card.slice(cardId + 1)],
        }));
        await updateDoc(doc(db, "Card", id), {
            Card: updatedCard
        });
    },
}))










