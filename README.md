# Homework / Домашнее задание :clipboard:

## goit-js-hw-02

:us:

<details>
	<summary>English</summary>

# Acceptance criteria

- Repository created `goit-js-hw-02`
- When submitting homework there is a link to the source files in the repository
- Each task is executed in a separate file named `task-task_number.js`. Use `<script type="module">`
  to close the job code in a separate scope and avoid identifier name conflicts.
- Variable names are clear and descriptive
- Code formatted using Prettier

# Task 1

Write a `logItems(array)` function that takes an array and uses a `for` loop to each element of the
array will output a message to the console in the format `[element number] - [element value]`.

Numbering must start with `1`. For example, for the first element of the array
`['Mango', 'Poly', 'Ajax']` with index `0` will print `'1 - Mango'`, and for index `2` it will print
`'3 - Ajax'`.

```js
const logItems = function (array) {
  // code
};

/*
 * Function calls to check the functionality of your implementation.
 */
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
```

# Task 2

Write a script for calculating the cost of engraving jewelry. To do this, create a function
`calculateEngravingPrice(message, pricePerWord)` receiving string (the string will contain only
words and spaces) and the cost of engraving one word, and the returning cost of engraving all the
words in the line.

```js
const calculateEngravingPrice = function (message, pricePerWord) {
  // code
};

/*
 * Function calls to check the functionality of your implementation.
 */
console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120
```

# Задание 3

Write a function `findLongestWord(string)` that takes an arbitrary string as a parameter (in the
line there will be only words and spaces) and returns the longest word in this string.

```js
const findLongestWord = function (string) {
  // code
};

/*
 * Function calls to check the functionality of your implementation.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
```

# Task 4

Write a function `formatString(string)` that takes a string and formats it if necessary.

- If the length of the string does not exceed `40 characters`, the function returns it in its
  original form.
- If the length is more than `40 characters`, then the function trims the string to 40 characters
  and adds it to the end strings with an ellipsis `'...'`, followed by a shortened version.

```js
const formatString = function (string) {
  // твой код
};

/*
 * Function calls to check the functionality of your implementation.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// the original string will be returned

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// will return a formatted string

console.log(formatString('Curabitur ligula sapien.'));
// the original string will be returned

console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
// will return a formatted string
```

# Task 5

Write a function `checkForSpam(message)` that takes 1 parameter `message` - a string. The function
checks it on the content of the words `spam` and `sale`. If a forbidden word is found, the function
returns `true`, if there are no prohibited words, the function returns `false`. Words in a line can
be in any order register.

```js
const checkForSpam = function (message) {
  // code
};

/*
 * Function calls to check the functionality of your implementation.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
```

# Task 6

Write a script with the following functionality:

- When loading the page, the user is prompted to enter a number in the `prompt`. The entry is saved
  in variable `input` and added to the array of numbers `numbers`.
- The operation of entering a number by the user and storing it in an array continues until the user
  will not click `Cancel` in the `prompt`.
- After the user has stopped entering by clicking `Cancel`, if the array is not empty, it is
  necessary calculate the sum of all elements of the array and write it to the `total` variable. Use
  a `for` loop or `for...of`. Then print the line ``The total sum of numbers is equal to [sum]'`
  into the console.

🔔 Checking that the user entered exactly a number and not an arbitrary set of characters is not
Necessarily. If you want, in case of incorrect input, show `alert` with text
`'The entered number was not a number, try again'`, and the result of `prompt` is written to an
array of numbers not necessary, after which the user is again prompted to enter a number in the
`prompt`.

```js
let input;
const numbers = [];
let total = 0;
```

# Task 7 - additional, not necessary

There is an array `logins` with user logins. Write a script for adding a login to the `logins`
array. The login you add must:

- be checked for length from 4 to 16 characters inclusive
- be unique, that is, absent from the `logins` array

Break a task into subtasks using functions.

Write a function `isLoginValid(login)`, in which you check the number of characters of the `login`
parameter and return `true` or `false` depending on whether the length of the parameter falls within
the given range from 4 to 16 characters inclusive.

Write a function `isLoginUnique(allLogins, login)` that takes a list of all logins and adding login
as parameters and checks for the presence of `login` in the `allLogins` array, returning `true` if
there is no such login yet and `false` if the login is already in use.

Write a function `addLogin(allLogins, login)` that:

- Accepts a new login and an array of all logins as parameters
- Checks the validity of the login using the `isLoginValid` auxiliary function
- If the login is not valid, stop executing the `addLogin` function and return the string
  ``Error! Login must be from 4 to 16 characters'`
- If the login is valid, the `addLogin` function checks the uniqueness of the login using the
  function `isLoginUnique`
- If `isLoginUnique` returns `false`, then `addLogin` does not add the login to the array and
  returns the line `'This login is already in use!'`
- If `isLoginUnique` returns `true`, `addLogin` adds the new login to `logins` and returns the line
  `'Login added successfully!'`

🔔 **Principle of single responsibility of a function** - each function does one thing. This allows
you to reuse code and change the logic of a function in only one place, without affecting the
operation of the program as a whole.

Predicate functions only return `true` or `false`. Such functions are usually called starting with
`is`: `isLoginUnique` and `isLoginValid` in our case.

- `isLoginUnique` only checks whether there is such a login in the array and returns `true` or
  `false`.
- `isLoginValid` only checks whether the login is valid and returns `true` or `false`.
- `addLogin` adds or does not add a login to the array. At the same time, for checks, the conditions
  for adding uses the results of calls to other functions - `isLoginUnique` and `isLoginValid`.

```js
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
  // code
};

const isLoginUnique = function (allLogins, login) {
  // code
};

const addLogin = function (allLogins, login) {
  // code
};

/*
 * Function calls to check the functionality of your implementation.
 */
console.log(addLogin(logins, 'Ajax')); // 'Login added successfully!'
console.log(addLogin(logins, 'robotGoogles')); // 'This login is already in use!'
console.log(addLogin(logins, 'Zod')); // 'Error! Login must be from 4 to 16 characters'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Error! Login must be from 4 to 16 characters'
```

</details>
:ukraine:
<details>
<summary>Russian</summary>
	
# Критерии приема

- Создан репозиторий `goit-js-hw-02`
- При сдаче домашней работы есть ссылка на исходные файлы в репозитории
- Каждое задание выполнено в отдельном файле с именем `task-номер_задания.js`. Используй
  `<script type="module">` чтобы закрыть код задания в отдельной области видимости и избежать
  конфликтов имен идентификаторов.
- Имена переменных и функций понятные, описательные
- Код отформатирован с помощью Prettier

# Задание 1

Напиши функцию `logItems(array)`, которая получает массив и использует цикл `for`, который для
каждого элемента массива будет выводить в консоль сообщение в формате
`[номер элемента] - [значение элемента]`.

Нумерация должна начинаться с `1`. К примеру для первого элемента массива
`['Mango', 'Poly', 'Ajax']` с индексом `0` будет выведено `'1 - Mango'`, а для индекса `2` выведет
`'3 - Ajax'`.

```js
const logItems = function (array) {
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
```

# Задание 2

Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию
`calculateEngravingPrice(message, pricePerWord)` принимающую строку (в строке будут только слова и
пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

```js
const calculateEngravingPrice = function (message, pricePerWord) {
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120
```

# Задание 3

Напиши фукцнию `findLongestWord(string)`, которая принимает параметром произвольную строку (в строке
будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

```js
const findLongestWord = function (string) {
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
```

# Задание 4

Напиши функцию `formatString(string)` которая принимает строку и форматирует ее если необходимо.

- Если длина строки не превышает `40 символов`, функция возвращает ее в исходном виде.
- Если длина больше `40 символов`, то функция обрезает строку до 40-ка символов и добавляет в конец
  строки троеточие `'...'`, после чего возвращает укороченную версию.

```js
const formatString = function (string) {
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
// вернется форматированная строка
```

# Задание 5

Напиши функцию `checkForSpam(message)`, принимающую 1 параметр `message` - строку. Функция проверяет
ее на содержание слов `spam` и `sale`. Если нашли зарещенное слово то функция возвращает `true`,
если запрещенных слов нет функция возвращает `false`. Слова в строке могут быть в произвольном
регистре.

```js
const checkForSpam = function (message) {
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
```

# Задание 6

Напиши скрипт со следующим функционалом:

- При загрузке страницы пользователю предлагается в `prompt` ввести число. Ввод сохраняется в
  переменную `input` и добавляется в массив чисел `numbers`.
- Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока
  пользователь не нажмет `Cancel` в `prompt`.
- После того как пользователь прекратил ввод нажав `Cancel`, если массив не пустой, необходимо
  посчитать сумму всех элементов массива и записать ее в переменную `total`. Используй цикл `for`
  или `for...of`. После чего в консоль выведи строку `'Общая сумма чисел равна [сумма]'`.

🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не
обязательно. Если хочешь, в случае некорректного ввода, показывай `alert` с текстом
`'Было введено не число, попробуйте еще раз'`, при этом результат `prompt` записывать в массив чисел
не нужно, после чего снова пользователю предлагается ввести число в `prompt`.

```js
let input;
const numbers = [];
let total = 0;
```

# Задание 7 - дополнительное, выполнять не обязательно

Есть массив `logins` с логинами пользователей. Напиши скрипт добавления логина в массив `logins`.
Добавляемый логин должен:

- проходить проверку на длину от 4 до 16-ти символов включительно
- быть уникален, то есть отсутствовать в массиве `logins`

Разбей задачу на подзадачи с помощью функций.

Напиши функцию `isLoginValid(login)`, в которой проверь количество символов параметра `login` и
верни `true` или `false` в зависимости от того, попадает ли длина параметра в заданный диапазон от
4-х до 16-ти символов включительно.

Напиши функцию `isLoginUnique(allLogins, login)`, которая принимает список всех логинов и
добавляемый логин как параметры и проверяет наличие `login` в массиве `allLogins`, возвращая `true`
если такого логина еще нет и `false` если логин уже используется.

Напиши функцию `addLogin(allLogins, login)` которая:

- Принимает новый логин и массив всех логинов как параметры
- Проверяет валидность логина используя вспомогательную функцию `isLoginValid`
- Если логин не валиден, прекратить исполнение функции `addLogin` и вернуть строку
  `'Ошибка! Логин должен быть от 4 до 16 символов'`
- Если логин валиден, функция `addLogin` проверяеть уникальность логина с помощью функции
  `isLoginUnique`
- Если `isLoginUnique` вернет `false`, тогда `addLogin` не добавляет логин в массив и возвращает
  строку `'Такой логин уже используется!'`
- Если `isLoginUnique` вернет `true`, `addLogin` добавляет новый логин в `logins` и возвращает
  строку `'Логин успешно добавлен!'`

🔔 **Принцип единственной ответственности функции** - каждая функция делает что-то одно. Это
позволяет переиспользовать код и изменять логику работы функции только в одном месте, не затрагивая
работу программы в целом.

Предикатные функции возвращают только `true` или `false`. Такие функции принято называть начиная с
`is`: `isLoginUnique` и `isLoginValid` в нашем случае.

- `isLoginUnique` только проверяет есть ли такой логин в массиве и возвращает `true` или `false`.
- `isLoginValid` только проверяет валидный ли логин и возвращает `true` или `false`.
- `addLogin` добавляет или не добавляет логин в массив. При этом для проверок условия добавления
  использует результаты вызовов других функций - `isLoginUnique` и `isLoginValid`.

```js
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
  // твой код
};

const isLoginUnique = function (allLogins, login) {
  // твой код
};

const addLogin = function (allLogins, login) {
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
```
