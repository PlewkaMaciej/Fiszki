import { create } from "zustand";
import { setDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../FirebaseConfig/FirebaseConfig";
import { arrayUnion } from "firebase/firestore";
export type StoreState = {
  filterCardsCategory: string; // Add this line
};
interface CardState {
  filterCardsCategory: string;
  isCardFiltered: boolean;
  addNewCard: (
    title: string,
    description: string,
    userIdLoggedIn: string,
    category: string
  ) => void;
  addQuestionToCard: (
    id: string,
    title: string,
    description: string,
  ) => void;
  setFilteredCards: (value:string) => void;
  setIsCardFiltered: (value: boolean) => void;
  isUserLoggedIn: boolean | null;
  idLoggedUser: string;
  setUserIdLoggedIn: (value: string) => void;
  setUserLoginIn: (value: boolean) => void;
}

export const useStore = create<CardState & StoreState>((set) => ({
  idLoggedUser: "",
  isUserLoggedIn: null,
  setUserLoginIn: (value) => set(() => ({ isUserLoggedIn: value })),
  setUserIdLoggedIn: (value) => set(() => ({ idLoggedUser: value })),
  setFilteredCards: (value) => {
    set({ filterCardsCategory: value });
  },
  isCardFiltered: false,
  setIsCardFiltered: (value) => {
    set({ isCardFiltered: value });
  },
  filterCardsCategory: "",
  addNewCard: async (title, description, idLoggedUser, category) => {
    const id = new Date().getTime().toString();

    try {
      await setDoc(doc(db, "Card", id), {
        title: title,
        likes: [],
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
  ) => {
    await updateDoc(doc(db, "Card", id), {
      
      questions: arrayUnion(
        { question: title, answer: description })
      
    });
  },
}));
