# Как я работал со словарём

1. Скачал с [сайта](http://speakrus.ru/dict/index.htm) словарь русской литературы (частотный);
2. Преобразовал кодировку текстового файла в UTF-8;
3. Удалил слова с частотой менее 1;
4. Удалил из файла частоты, для того чтобы каждой строке соответствовало одно слово;
5. Преобразовал русские слова их их транслиту:
6. Добавил каждому слову его метафоны с помощью алгоритмов Double Metaphone и имплементации этого алгоритма для русских слов;
7. Полученный словарь вывел в JSON-файл.