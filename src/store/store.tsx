import { create } from "zustand";
import { getData } from "../GetApi/GetApi";
import { Card } from "../types/types";
import { setDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../FirebaseConfig/FirebaseConfig";
import { getUserCardsData } from "../GetApi/GetUserCards";
interface CardState {
  cards: {};
  userCards: {};
  addNewCard: (
    title: string,
    description: string,
    userIdLoggedIn: string
  ) => void;
  addQuestionToCard: (
    id: string,
    title: string,
    description: string,
    clickedCard: Card
  ) => void;
  fetch: () => void;
  fetchUserCards: (idLoggedUser: string) => void;
  isUserLoggedIn: boolean | null;
  idLoggedUser: string;
  setUserIdLoggedIn: (value: string) => void;
  setUserLoginIn: (value: boolean) => void;
}

export const useStore = create<CardState>((set) => ({
  idLoggedUser: "",
  isUserLoggedIn: null,
  setUserLoginIn: (value) =>
    set((state) => ({ ...state, isUserLoggedIn: value })),
  setUserIdLoggedIn: (value) =>
    set((state) => ({ ...state, idLoggedUser: value })),

  fetch: () => {
    getData().then((datas) => {
      set({ cards: datas });
    });
  },
  fetchUserCards: (idLoggedUser) => {
    getUserCardsData(idLoggedUser).then((datas) => {
      set({ userCards: datas });
    });
  },
  userCards: {},
  cards: {},
  addNewCard: async (title: string, description: string, idLoggedUser) => {
    const id = new Date().getTime().toString();

    try {
      await setDoc(doc(db, "Card", id), {
        Card: {
          title: title,
          description: description,
          questions: [],
          Userid: idLoggedUser,
        },
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
    const updatedCard = {
      ...clickedCard,
      questions: [
        ...clickedCard.questions,
        { question: title, answer: description },
      ],
    };

    await updateDoc(doc(db, "Card", id), {
      Card: updatedCard,
    });
  },
}));
