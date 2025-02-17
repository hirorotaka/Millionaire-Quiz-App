import { Question, MoneyPyramidType } from '../types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: '日本の首都はどこですか？',
    answers: [
      { text: '大阪', correct: false },
      { text: '京都', correct: false },
      { text: '東京', correct: true },
      { text: '札幌', correct: false },
    ],
  },
  {
    id: 2,
    question: '日本の国鳥は何ですか？',
    answers: [
      { text: 'カラス', correct: false },
      { text: 'ツル', correct: false },
      { text: 'キジ', correct: true },
      { text: 'ハト', correct: false },
    ],
  },
  {
    id: 3,
    question: '日本で一番高い山は何ですか？',
    answers: [
      { text: '白山', correct: false },
      { text: '富士山', correct: true },
      { text: '立山', correct: false },
      { text: '御嶽山', correct: false },
    ],
  },
  {
    id: 4,
    question: '日本の通貨は何ですか？',
    answers: [
      { text: 'ドル', correct: false },
      { text: 'ユーロ', correct: false },
      { text: '円', correct: true },
      { text: 'ポンド', correct: false },
    ],
  },
  {
    id: 5,
    question: '日本の国旗に描かれているものは何ですか？',
    answers: [
      { text: '星', correct: false },
      { text: '月', correct: false },
      { text: '太陽', correct: true },
      { text: '桜', correct: false },
    ],
  },
  {
    id: 6,
    question: '日本の伝統的な衣装は何ですか？',
    answers: [
      { text: 'チャイナドレス', correct: false },
      { text: 'スーツ', correct: false },
      { text: 'キモノ', correct: true },
      { text: 'サリー', correct: false },
    ],
  },
  {
    id: 7,
    question: '日本の最も有名なアニメスタジオはどれですか？',
    answers: [
      { text: 'ディズニー', correct: false },
      { text: 'ジブリ', correct: true },
      { text: 'ピクサー', correct: false },
      { text: 'ドリームワークス', correct: false },
    ],
  },
  {
    id: 8,
    question: '日本の古都として有名な都市はどこですか？',
    answers: [
      { text: '札幌', correct: false },
      { text: '名古屋', correct: false },
      { text: '京都', correct: true },
      { text: '広島', correct: false },
    ],
  },
  {
    id: 9,
    question: '日本で最も古い大学はどこですか？',
    answers: [
      { text: '早稲田大学', correct: false },
      { text: '京都大学', correct: false },
      { text: '東京大学', correct: true },
      { text: '慶應義塾大学', correct: false },
    ],
  },
  {
    id: 10,
    question: '日本の有名な魚市場はどこですか？',
    answers: [
      { text: '築地市場', correct: true },
      { text: '錦市場', correct: false },
      { text: '黒門市場', correct: false },
      { text: '市場市場', correct: false },
    ],
  },
  {
    id: 11,
    question: '日本の有名な温泉地はどこですか？',
    answers: [
      { text: '箱根', correct: true },
      { text: '渋谷', correct: false },
      { text: '新宿', correct: false },
      { text: '池袋', correct: false },
    ],
  },
  {
    id: 12,
    question: '日本の主要な自動車メーカーはどれですか？',
    answers: [
      { text: 'フォード', correct: false },
      { text: 'トヨタ', correct: true },
      { text: 'BMW', correct: false },
      { text: 'ヒュンダイ', correct: false },
    ],
  },
  {
    id: 13,
    question: '日本で一番多くの観光客が訪れる都市はどこですか？',
    answers: [
      { text: '大阪', correct: false },
      { text: '東京', correct: true },
      { text: '神戸', correct: false },
      { text: '福岡', correct: false },
    ],
  },
  {
    id: 14,
    question: '日本の伝統的な演劇は何ですか？',
    answers: [
      { text: 'オペラ', correct: false },
      { text: 'バレエ', correct: false },
      { text: '能', correct: true },
      { text: 'シェイクスピア劇', correct: false },
    ],
  },
  {
    id: 15,
    question: '日本の象徴的な電子製品ブランドはどれですか？',
    answers: [
      { text: 'サムスン', correct: false },
      { text: 'アップル', correct: false },
      { text: 'ソニー', correct: true },
      { text: 'マイクロソフト', correct: false },
    ],
  },
];

export const MONEY_PYRAMID: MoneyPyramidType[] = [
  { id: 1, amount: '100' },
  { id: 2, amount: '200' },
  { id: 3, amount: '300' },
  { id: 4, amount: '500' },
  { id: 5, amount: '1,000' },
  { id: 6, amount: '2,000' },
  { id: 7, amount: '4,000' },
  { id: 8, amount: '8,000' },
  { id: 9, amount: '16,000' },
  { id: 10, amount: '32,000' },
  { id: 11, amount: '64,000' },
  { id: 12, amount: '125,000' },
  { id: 13, amount: '250,000' },
  { id: 14, amount: '500,000' },
  { id: 15, amount: '1,000,000' },
];
