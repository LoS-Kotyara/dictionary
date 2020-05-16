import { makeDictionary } from './make_dictionary';
import { testForSimilarity } from './testWordForSimilarity';
import { normString, testWithRandomData, jsonReader } from './funcs';

import { writeFileSync } from 'fs';

import { RU_DICTIONARY } from './env';
import { word } from '../types/word';

let obj = jsonReader(RU_DICTIONARY);
export const dictionary: word[] = obj.err ? null : obj.dictionary;

testWithRandomData(2);

// makeDictionary();
