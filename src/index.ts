import { makeDictionary } from './make_dictionary';
import { cyrMetaphone, toTransliteration } from './funcs';
import { damerauLevenshtein } from './levenshtein';
import { jsonReader } from './funcs/jsonReader';

const doubleMetaphone = require('double-metaphone');

import { JSON_DICTIONARY_PATH } from './env';
import { word } from './types';

let obj = jsonReader(JSON_DICTIONARY_PATH);
if (obj.err) throw obj.err;
let dict: word[] = obj.response;

let test_word = 'Привет';
let test_word_translit = toTransliteration(test_word);

let _test_word: word = {
  word: test_word,
  metaphone: doubleMetaphone(test_word_translit),
  cyrMetaphone: cyrMetaphone(test_word),
  translit: test_word_translit,
};

let metaphones: word[] = [];
let cyrMetaphones: word[] = [];
dict.forEach((word: word) => {
  if (word.word.length < 2) return;
  if (Math.abs(word.word.length - _test_word.word.length) > 1) return;
  if (damerauLevenshtein(_test_word.metaphone, word.metaphone).steps <= 1)
    metaphones.push(word);
  if (damerauLevenshtein(_test_word.cyrMetaphone, word.cyrMetaphone).steps <= 1)
    cyrMetaphones.push(word);
});

console.log(metaphones, cyrMetaphones);

// console.log(damerauLevenshtein('hello world', 'Hello World!'));

// makeDictionary();
