import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../FirebaseConfig/FirebaseConfig";
import { Card } from "../types/types";
import { ObjectOfCards } from "../types/types";

export const getData = async (): Promise<{}> => {
  const q = query(collection(db, "Card"));
  const querySnapshot = await getDocs(q);
  const objectOfCards: ObjectOfCards = {};

  querySnapshot.docs.forEach((doc) => {
    const card: Card = {
      ...doc.data().Card,
      id: doc.id,
    };
    objectOfCards[doc.id] = card;
  });

  return objectOfCards;
};
