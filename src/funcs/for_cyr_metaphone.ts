export let normalize = (str: string) =>
  (str = str.toUpperCase().replace(/Ъ|Ь|-/g, ''));

export let removeDuplicates = (str: string) => str.replace(/(.)\1/gi, '$1');

export let IOtoI = (str: string) => str.replace(/ЙО|ИО|ЙЕ|ИЕ/g, 'И');

export let OtoA = (str: string) => str.replace(/О|Ы|Я/g, 'А');

export let EtoI = (str: string) => str.replace(/Е|Ё|Э/g, 'И');

export let UtoY = (str: string) => str.replace(/Ю/g, 'У');

export let BtoP = (str: string) =>
  (str = str
    .replace(/Б(Б|В|Г|Д|Ж|З|Й|К|П|С|Т|Ф|Х|Ц|Ч|Ш|Щ)/g, 'П$1')
    .replace(/Б$/, 'П'));

export let ZtoS = (str: string) =>
  (str = str
    .replace(/З(Б|В|Г|Д|Ж|З|Й|К|П|С|Т|Ф|Х|Ц|Ч|Ш|Щ)/g, 'С$1')
    .replace(/З$/, 'С'));

export let DtoT = (str: string) =>
  (str = str
    .replace(/Д(Б|В|Г|Д|Ж|З|Й|К|П|С|Т|Ф|Х|Ц|Ч|Ш|Щ)/g, 'Т$1')
    .replace(/Д$/, 'Т'));

export let VtoF = (str: string) =>
  (str = str
    .replace(/В(Б|В|Г|Д|Ж|З|Й|К|П|С|Т|Ф|Х|Ц|Ч|Ш|Щ)/g, 'Ф$1')
    .replace(/В$/, 'Ф'));

export let GtoK = (str: string) =>
  (str = str
    .replace(/Г(Б|В|Г|Д|Ж|З|Й|К|П|С|Т|Ф|Х|Ц|Ч|Ш|Щ)/g, 'К$1')
    .replace(/Г$/, 'К'));

export let TStoC = (str: string) => str.replace(/ТС|ДС/g, 'Ц');
