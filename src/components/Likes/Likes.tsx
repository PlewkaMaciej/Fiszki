import { useStore } from "../../store/Store";
import redHeart from "./icons/redHeart.png";
import blackHeart from "./icons/blackHeart.png";
import { LikesProps } from "../../types/types";
import { LikesContainer, HeartImg } from "./LikesStyle";
import { useQuery } from "react-query";
import { getData } from "../../GetApi/GetApi";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "../../FirebaseConfig/FirebaseConfig";
function Likes({ cards, id }: LikesProps) {
  const userIdLoggedUser = useStore((state) => state.idLoggedUser);
  const documentRef = doc(db, "Card", id);
  const { refetch } = useQuery("fetchCards", getData);
  const addLike = async (userIdLoggedUser: string) => {
    if(cards){
        console.log(cards[id])
        if (cards[id].likes.includes(userIdLoggedUser)) {
            
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
    {cards&&
    <LikesContainer>
        {cards[id].likes.includes(userIdLoggedUser)&&
        <>
    <HeartImg
      src={redHeart}
      onClick={() => addLike(userIdLoggedUser)}
      alt="arrowRight"
    />
    <p>{cards[id].likes.length}</p>
    </>
}
{cards[id].likes.includes(userIdLoggedUser)===false&&
    <>
    <HeartImg
      src={blackHeart}
      onClick={() => addLike(userIdLoggedUser)}
      alt="arrowRight"
    />
    <p>{cards[id].likes.length}</p>
    </>
}
  </LikesContainer>
    }
      
    </>
  );
}

export default Likes;
