import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../FirebaseConfig/FirebaseConfig";
import { Card } from "../types/types";

export const getUserCardsData = async (
  idLoggedUser: string
): Promise<Record<string, Card>> => {
  const q = query(
    collection(db, "Card"),
    where("Card.Userid", "==", idLoggedUser)
  );

  const querySnapshot = await getDocs(q);
  const objectOfUserCards: Record<string, Card> = {};

  querySnapshot.forEach((doc) => {
    const cardData = doc.data() as Card;
    objectOfUserCards[doc.id] = { ...cardData, id: doc.id };
  });

  return objectOfUserCards;
};
