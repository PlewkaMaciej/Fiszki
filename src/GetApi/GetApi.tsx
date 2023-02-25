import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../FirebaseConfig/FirebaseConfig";
import { Card } from "../types/types";

export const getData = async (): Promise<Record<string, Card>> => {
  const q = query(collection(db, "Card"));
  const querySnapshot = await getDocs(q);

  const data: Record<string, Card> = {};

  querySnapshot.forEach((doc) => {
    const card = doc.data() as Card;
    data[doc.id] = { ...card, id: doc.id };
  });

  return data;
};
