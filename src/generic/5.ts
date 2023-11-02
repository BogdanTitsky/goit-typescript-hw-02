/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<K, V> {
    key: K;
    value: V;
}

const numberPair: KeyValuePair<number, string> = { key: 1, value: 'One' };
const stringPair: KeyValuePair<string, number> = { key: 'Two', value: 2 };

export {};
