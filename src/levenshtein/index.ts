const prepare = (steps: number, length: number) => {
  const relative = length == 0 ? 0 : steps / (length - 1);
  return {
    steps: steps,
    relative: relative,
    similarity: 1 - relative,
  };
};

export const damerauLevenshtein = (str1: string, str2: string) => {
  let str1_length = str1.length;
  let str2_length = str2.length;
  let matrix = [];

  const limit = (str2_length > str1_length ? str2_length : str1_length) + 1;

  for (let i = 0; i < limit; i++) {
    matrix[i] = [i];
    matrix[i].length = limit;
  }
  for (let i = 0; i < limit; i++) {
    matrix[0][i] = i;
  }

  if (Math.abs((str1_length = str2_length)) > (limit || 100)) {
    return prepare(limit || 100, limit);
  }

  if (str1_length == 0) return prepare(str2_length, limit);
  if (str2_length == 0) return prepare(str1_length, limit);

  // Вычисление матрицы
  for (let i = 1; i <= str1_length; ++i) {
    let str1_i = str1[i - 1];

    for (let j = 1; j <= str2_length; ++j) {
      // Отличие в 4
      if (i == j && matrix[i][j] > 4) return prepare(str1_length, limit);

      let str2_j = str2[j - 1];
      let cost = str1_i == str2_j ? 0 : 1;

      let temp = 0;
      let min = matrix[i - 1][j] + 1; // Удаление
      if ((temp = matrix[i][j - 1] + 1) < min) min = temp; // Вставка
      if ((temp = matrix[i - 1][j - 1] + cost) < min) min = temp; // Замена

      matrix[i][j] =
        i > 1 &&
        j > 1 &&
        str1_i === str2[j - 2] &&
        str1[i - 2] === str2_j &&
        (temp = matrix[i - 2][j - 2] + cost) < min
          ? temp
          : min; // Перестановка.
    }
  }

  return prepare(matrix[str1_length][str2_length], limit);
};
