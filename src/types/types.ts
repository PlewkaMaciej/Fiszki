export interface Card {
    title: string;
    description: string;
    id:string,
    questions: {  question: string; answer: string;  }[];
  }
  export interface ObjectOfCards {[key: string]: Card}