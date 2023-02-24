export interface Card {
  title: string;
  description: string;
  id: string;
  Userid: string;
  category:string
  questions: { question: string; answer: string }[];
}
export interface ObjectOfCards {
  [key: string]: Card;
}
export interface FormValues {
  title: string;
  description: string;
}
export interface SortingCardsProps {
  cards?: Record<string, Card>;
  isSuccess:boolean;
}

