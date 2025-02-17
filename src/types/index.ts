export interface Question {
  id: number;
  question: string;
  answers: {
    text: string;
    correct: boolean;
  }[];
}

export interface MoneyPyramidType {
  id: number;
  amount: string;
}
