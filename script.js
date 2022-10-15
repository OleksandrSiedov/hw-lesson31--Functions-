//1. Напиши всі можливі варіанти створення функцій.

function showCase1() {
  alert('#1 - Function declaration');
};

let showCase2 = function () { alert('#2 - Function expresion'); };

//2. Створи функцію, яка буде виводити кількість переданих їй аргументів.

function showNumberOfArguments() {
  return arguments.length;
};

//3. Напиши функцію, яка приймає 2 числа і повертає :
//  -1, якщо перше число менше, ніж друге; 
//  1 - якщо перше число більше, ніж друге; 
//  0 - якщо числа рівні.

function compareTwoNumbers(a, b) {
  let result;
  if (a > b) {
    return result = -1;
  } else {
    if (a < b) {
      return result = 1;
    } else {
      return result = 0;
    }
  }
};

//4. Напиши функцію, яка обчислює факторіал переданого їй числа.

function factorial(num) {
  let result = 1;
  for (let i = 2; i <= num; i++)
    result = result * i;
  return result;
}

//4. Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

//тут по правильному сделать проверки, но мы же исходим из того, что передаются цыфры от 0 до 9

function merge(a, b, c) {
  return 100 * a + 10 * b + c;
};

//5. Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

function calcArea(a, b) {
  if (b == undefined) {
    return a * a;
  } else {
    return a * b;
  }
};

// 6.1. Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

// без проверок. счиатем, что мы получаем целое чисол больше 1

function getDividers(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      arr.push(i)
    };
  }
  return arr;
};

function calcArrSum(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

function checkPerfect(num) {
  return num === calcArrSum(getDividers(num)) / 2
};

// 6.2. Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.


// без проверок. счиатем, что a<b, a и b включені в диапазон

function findPerfect(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
    if (checkPerfect(i)) arr.push(i);
  }
  return arr;
};
