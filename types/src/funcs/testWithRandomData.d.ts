export declare const testWithRandomData: (numOfIters: number) => Promise<unknown>;
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
