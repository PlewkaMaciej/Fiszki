export interface Card {
    title: string;
    description: string;
    id:number,
    questions: {  question: string; answer: string;  }[];
  }