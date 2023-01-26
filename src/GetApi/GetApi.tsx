import { collection, query, getDocs, } from "firebase/firestore";
import { db } from "../FirebaseConfig/FirebaseConfig";
import { Card} from "../types/types";

export const getData = async (): Promise<Card[]> => {
    const q = query(collection(db, "Card"));
    const querySnapshot = await getDocs(q);
    const arrayOfCards: Card[] = [];
    querySnapshot.docs.forEach((doc) => {
        const card: Card = {
            ...doc.data().Card,
            id: doc.id
        }
        arrayOfCards.push(card);
    });
    return arrayOfCards;
}
   

