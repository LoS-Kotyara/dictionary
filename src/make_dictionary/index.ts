import * as fs from 'fs';

import * as funcs from './../funcs';

import { TXT_DICTIONARY_PATH, JSON_DICTIONARY_PATH } from './../env';

export type word = {
  word: string;
  translit: string;
  metaphone: string;
  cyrMetaphone: string;
};

export const makeDictionary = () => {
  let dict: word[] = [];

  let words = fs
    .readFileSync(TXT_DICTIONARY_PATH, { encoding: 'utf8' })
    .split(/\r?\n/)
    .map((string) => string.replace(/^\s*\d+\s*/, ''));

  let transliterated = words.map((word) => funcs.toTransliteration(word));

  let metaphone = transliterated.map((word) => {
    let temp = funcs.doubleMetaphone(word);
    return temp[0];
  });

  let cyrMetaphone = words.map((word) => {
    return funcs.cyrMetaphone(word);
  });

  for (let i = 0; i < words.length; i++) {
    dict.push({
      word: words[i],
      translit: transliterated[i],
      metaphone: metaphone[i],
      cyrMetaphone: cyrMetaphone[i],
    });
  }

  fs.writeFile(
    JSON_DICTIONARY_PATH,
    JSON.stringify(dict, null, '  '),
    (err) => {
      if (err) console.error(err);
    },
  );

  // console.table(dict.slice(0, 100));
};
