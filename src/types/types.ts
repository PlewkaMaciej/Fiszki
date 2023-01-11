export interface Card {
    title: string;
    description: string;
    isCardAbleToSee:boolean;
    id:number,
    questions: {  question: string; answer: string;  }[];
  }