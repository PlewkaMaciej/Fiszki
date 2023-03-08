export interface Card {
  title: string;
  description: string;
  id: string;
  Userid: string;
  category:string
  likes:string[],
  questions: { question: string; answer: string }[];
}
export interface FormValues {
  title: string;
  description: string;
}
export interface LikesProps {
  cards?:Array<Card>;
  isSuccess:boolean;
  id:string
}

