import { word } from './types';
import { similarityData } from './types';
export declare const dictionary: word[];
/**
 * @param data Массив нормализованных слов
 * @returns Массив слов с предложениями по исправлению
 */
export declare const spellCheck: (data: string[]) => similarityData;
