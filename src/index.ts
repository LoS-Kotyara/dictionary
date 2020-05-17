import { makeDictionary } from './make_dictionary';
import { testForSimilarity } from './testWordForSimilarity';
import { normString, testWithRandomData, jsonReader } from './funcs';
import { testForSimilarityEntireData } from './testWordForSimilarity';

import { writeFileSync } from 'fs';

import { RU_DICTIONARY } from './env';
import { word } from '../types/word';
import { similarityData } from './../types/similarityData';

let obj = jsonReader(RU_DICTIONARY);
export const dictionary: word[] = obj.err ? null : obj.dictionary;

/**
 * @param data Массив нормализованных слов
 * @returns Массив слов с предложениями по исправлению
 */
export const spellCheck = (data: string[]): similarityData => {
  return testForSimilarityEntireData(data);
};
