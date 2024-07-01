export interface Question {
  id: number;
  question: string;
  answers: {
    text: string;
    correct: boolean;
  }[];
}

export interface Pyramid {
  id: number;
  amount: string;
}
