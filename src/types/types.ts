export interface Card {
    title: string;
    description: string;
    id:string,
    Userid: string,
    questions: {  question: string; answer: string;  }[];
   
  }
  export interface ObjectOfCards {[key: string]: Card}