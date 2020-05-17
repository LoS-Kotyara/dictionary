import { cyrMetaphone, toTransliteration } from '../funcs';
import { damerauLevenshtein } from '../levenshtein';
const doubleMetaphone = require('double-metaphone');

import { word } from '../types';
import { lev } from '../types';
type similarity = {
  word: string;
  lev: lev;
};
import { dictionary } from '../index';
import { workerData } from 'worker_threads';
import { strict } from 'assert';
import { similarityData } from '../types';

const sortByKey = (_this: similarity, that: similarity): number => {
  if (_this.lev.similarity > that.lev.similarity) return 1;
  if (_this.lev.similarity < that.lev.similarity) return -1;
  return 0;
};

let findInObject = (word: string) => {
  for (let el of dictionary) {
    if (el.word == word) {
      return true;
    }
  }
  return false;
};

export const testForSimilarity = (Word: string): string[] => {
  const word = Word.toLowerCase();
  const translit = toTransliteration(word);

  const _word: word = {
    word: word,
    metaphone: doubleMetaphone(translit)[0],
    cyrMetaphone: cyrMetaphone(word),
    translit: translit,
  };

  let metaphones: similarity[] = [];

  dictionary.forEach((word: word) => {
    if (Math.abs(word.word.length - _word.word.length) > 1) return;

    const metaphone = damerauLevenshtein(_word.metaphone, word.metaphone);

    const cyrMetaphone = damerauLevenshtein(
      _word.cyrMetaphone,
      word.cyrMetaphone,
    );

    const wordDif = damerauLevenshtein(word.word.toLowerCase(), _word.word);
    if (wordDif.steps <= 1 || wordDif.similarity >= 0.9) {
      metaphones.push({ word: word.word, lev: wordDif });
    } else {
      if (cyrMetaphone.similarity >= 0.9) {
        metaphones.push({ word: word.word, lev: cyrMetaphone });
      } else {
        if (metaphone.similarity >= 0.9) {
          metaphones.push({ word: word.word, lev: metaphone });
        }
      }
    }
  });

  return metaphones
    .filter((item) => item.word !== word)
    .sort(sortByKey)
    .slice(0, 5)
    .map((word) => word.word);
};

export const testForSimilarityEntireData = (data: string[]): similarityData => {
  return data.map((word) => {
    if (findInObject(word.toLowerCase()))
      return {
        word: word,
        correct: true,
        suggestions: [],
      };

    return {
      word: word,
      correct: false,
      suggestions: testForSimilarity(word),
    };
  });
};
