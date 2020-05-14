import { readFileSync } from 'fs';
import { word } from './../types';

export const jsonReader = (
  path: string,
): {
  err: string;
  response: word[];
} => {
  try {
    let dict = readFileSync(path, 'utf8');
    let object = JSON.parse(dict);
    return { err: null, response: object };
  } catch {
    return { err: 'An error has occurred', response: null };
  }
};
