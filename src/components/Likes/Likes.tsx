import { useStore } from "../../store/Store";
import redHeart from "./icons/redHeart.png";
import blackHeart from "./icons/blackHeart.png";
import { LikesProps } from "../../types/types";
import { LikesContainer, HeartImg } from "./LikesStyle";
import { useQuery } from "react-query";
import { getData } from "../../GetApi/GetApi";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "../../FirebaseConfig/FirebaseConfig";
import { Card } from "../../types/types";
import { useEffect, useState } from "react";
function Likes({ cards, id }: LikesProps) {
  const [currentCard, setCurrentCard] = useState<Card>();
  const userIdLoggedUser = useStore((state) => state.idLoggedUser);
  const documentRef = doc(db, "Card", id);
  const { refetch } = useQuery("fetchCards", getData);
  useEffect(() => {
    if (cards) {
      const currentCard = cards.find((card) => card.id === id);
      setCurrentCard(currentCard);
    }
    
  },[currentCard,cards,id]);
  const addLike = async (userIdLoggedUser: string) => {
    if (currentCard) {
      if (currentCard.likes.includes(userIdLoggedUser)) {
        await updateDoc(documentRef, {
          likes: arrayRemove(userIdLoggedUser),
        });
      } else {
        await updateDoc(documentRef, {
          likes: arrayUnion(userIdLoggedUser),
        });
      }
      refetch();
    }
  };
  return (
    <>
      {currentCard && (
        <LikesContainer>
          {currentCard.likes.includes(userIdLoggedUser) && (
            <>
              <HeartImg
                src={redHeart}
                onClick={() => addLike(userIdLoggedUser)}
                alt="arrowRight"
              />
              <p>{currentCard.likes.length}</p>
            </>
          )}
          {currentCard.likes.includes(userIdLoggedUser) === false && (
            <>
              <HeartImg
                src={blackHeart}
                onClick={() => addLike(userIdLoggedUser)}
                alt="arrowRight"
              />
              <p>{currentCard.likes.length}</p>
            </>
          )}
        </LikesContainer>
      )}
    </>
  );
}

export default Likes;
