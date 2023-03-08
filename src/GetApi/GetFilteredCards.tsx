import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../FirebaseConfig/FirebaseConfig";
import { Card } from "../types/types";

export const getFilteredCards = async (category: string) => {
  const q = query(
    collection(db, "Card"),
    where("category", "==", category)
  );

  const querySnapshot = await getDocs(q);
  const data: Array<Card> = [];

  querySnapshot.forEach((doc) => {
    const card = doc.data() as Card;
    data.push({ ...card, id: doc.id })
  });

  return data;
};