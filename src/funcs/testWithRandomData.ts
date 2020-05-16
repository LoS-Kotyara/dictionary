import { testForSimilarityEntireData } from '../testWordForSimilarity';
import { normString } from '.';

import axios from 'axios';
import { performance } from 'perf_hooks';
import { similarityData } from './../../types/similarityData';

export const testWithRandomData = async (numOfIters: number) => {
  return new Promise(async (resolve) => {
    let texts: number[] = [];
    let timings: number[] = [];
    for (let i = 0; i < numOfIters; i++) {
      await axios
        .get(`https://fish-text.ru/get?&type=paragraph&number=5`)
        .then((res) => res.data.text)
        .then((res) => normString(res))
        .then((data) => {
          console.log(i, data.length);
          texts.push(data.length);
          let t0 = performance.now();
          let similarity: similarityData = testForSimilarityEntireData(data);
          let t1 = performance.now();

          similarity.forEach((word) => {
            console.log(word.word);
            console.table(word.suggestions);
          });

          // console.log((t1 - t0) / 1000);
          timings.push((t1 - t0) / 1000);
        });
    }
    resolve({ texts, timings });
  });
};

/**
let t1 = performance.now();
testWithRandomData().then((res: { texts: number[]; timings: number[] }) => {
  let count = res.texts.length;
  let text = res.texts.map((el) => {
    return { 'Words count': el };
  });
  let time = res.timings.map((el) => {
    return {
      'Time spent': el.toFixed(2) + 's',
    };
  });
  console.table(text);
  console.table(time);

  console.log(
    'Time spent processing ' +
      res.texts.reduce((el, sum) => sum + el, 0) +
      ' words: ' +
      ((performance.now() - t1) / 1000).toFixed(2) +
      's',
  );
  let avg = [];
  for (let i = 0; i < count; i++) {
    avg.push(res.timings[i] / res.texts[i]);
  }
  console.log(
    'Average time spent per word: ' +
      (avg.reduce((a, b) => a + b, 0) / count).toFixed(2),
  );
});
*/
