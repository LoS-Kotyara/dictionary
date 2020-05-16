import { readFileSync } from 'fs';
import { word } from '../../types/word';

export const jsonReader = (
  path: string,
): {
  err: string;
  dictionary: word[];
} => {
  try {
    let dict = readFileSync(path, 'utf8');
    let object = JSON.parse(dict);
    return { err: null, dictionary: object };
  } catch {
    return { err: 'An error has occurred', dictionary: null };
  }
};
