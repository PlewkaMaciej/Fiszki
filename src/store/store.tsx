import { create } from "zustand";
import { Card, ObjectOfCards } from "../types/types";
import { setDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../FirebaseConfig/FirebaseConfig";

interface CardState {
  filterCards: {};
  isCardFiltered: boolean;
  addNewCard: (
    title: string,
    description: string,
    userIdLoggedIn: string,
    category: string,
  ) => void;
  addQuestionToCard: (
    id: string,
    title: string,
    description: string,
    clickedCard: Card
  ) => void;
  setFilteredCards: (value: ObjectOfCards) => void;
  setIsCardFiltered: (value:boolean) => void;
  isUserLoggedIn: boolean | null;
  idLoggedUser: string;
  setUserIdLoggedIn: (value: string) => void;
  setUserLoginIn: (value: boolean) => void;
}

export const useStore = create<CardState>((set) => ({
  idLoggedUser: "",
  isUserLoggedIn: null,
  setUserLoginIn: (value) =>
    set(() => ({  isUserLoggedIn: value })),
  setUserIdLoggedIn: (value) =>
    set(() => ({  idLoggedUser: value })),
  setFilteredCards: (value) => {
    set({ filterCards: value });
  },
  isCardFiltered: false,
  setIsCardFiltered: (value) => {
    set({ isCardFiltered:value });
  },
  filterCards: {},
  addNewCard: async (
    title,
    description,
    idLoggedUser,
    category
  ) => {
    const id = new Date().getTime().toString();

    try {
      await setDoc(doc(db, "Card", id), {
        
          title: title,
          likes:[],
          description: description,
          questions: [],
          Userid: idLoggedUser,
          category: category,
        
      });
    } catch (error) {
      console.log(error);
    }
  },
  addQuestionToCard: async (
    id: string,
    title: string,
    description: string,
    clickedCard
  ) => {
    
    await updateDoc(doc(db, "Card", id), {
      questions: [
        ...clickedCard.questions,
        { question: title, answer: description },
      ],
    });
  },
}));
