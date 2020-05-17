export type word = {
  word: string;
  translit: string;
  metaphone: string;
  cyrMetaphone: string;
};
export type similarityData = {
  word: string;
  correct: boolean;
  suggestions: string[];
}[];
export type lev = {
  steps: number;
  relative: number;
  similarity: number;
};
