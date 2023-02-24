import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../FirebaseConfig/FirebaseConfig";
import { Card } from "../types/types";
import { ObjectOfCards } from "../types/types";

export const getUserCardsData = async (idLoggedUser: string): Promise<Record<string,Card>> => {
  const q = query(
    collection(db, "Card"),
    where("Card.Userid", "==", idLoggedUser)
  );

  const querySnapshot = await getDocs(q);
  const objectOfUserCards: ObjectOfCards = {};
  querySnapshot.docs.forEach((doc) => {
    const userCards: Card = {
      ...doc.data().Card,
      id: doc.id,
    };
    objectOfUserCards[doc.id] = userCards;
  });

  return objectOfUserCards;
};
