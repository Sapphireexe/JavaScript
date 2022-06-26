// JS. HW_2_v.2

// Напишите валидационный скрипт используя функции 

//  1. Скрипт должен на вход принимать строку.
//  2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
//  3. Минимум 5 символов в строке
//  4. Максимум 64 символа в строке
//  5. В строке должны быть буквы
//  6. Должна быть хотя бы одна буква в верхнем регистре
//  7. Должна быть хотя бы одна цифра
//  8. Должна быть хотя бы одна @
//  9. Строка не должна быть пустой

//const validStr = prompt('Input from 5 to 64 symbols (letters, numbers and @ symbols only allowed). Should include at least one uppercase letter, one number and one @');
const validStr = 'Input from 5 to 64 symbols (letters, numbers and @ symbols only allowed). Should include at least one uppercase letter, one number and one @';

let result = [];

fcheck(validStr);

console.log('The string is ==>', validStr, '<==\n', result)

function fcheck() {
    flength(validStr);
    if (result != 'Min length is 5 symbols. The string is empty.') {
        finvalid(validStr);
        fletter(validStr);
        fnumber(validStr);
        fatsymbol(validStr);
    }
    if (result.length == 0) {
        result.add = 'Valid string.'
    }
}

function flength() {
    if (/^.{1,4}$/.test(validStr)) {
        return 'Min length is 5 symbols. Current length is ', validStr.length, '.\n';
    } else if (/^.{65,}$/.test(validStr)) {
        result = 'Max length is 64 symbols. Current length is ', validStr.length, '.\n';
    } else if (/^$/.test(validStr)) {
        result = 'Min length is 5 symbols. The string is empty.';
    }
}

function finvalid() {
    if (!(/^[A-Za-z0-9@]+$/.test(validStr))) {
        result += 'The string contains invalid symbols: ' + validStr.split(/[A-Za-z0-9@]*/) + '.\n';
    }
}

function fletter() {
    if (/^(?=.*[a-z]+)[^A-Z]+$/.test(validStr)) {
        result += 'No one uppercase letter was detected.\n';
    } else if (/^[^A-Za-z]+$/.test(validStr)) {
        result += 'No one letter was detected.\n';
    }
}

function fnumber() {
    if (/^[^0-9]+$/.test(validStr)) {
        result += 'No one numeric symbol was detected.\n';
    }
}

function fatsymbol() {
    if (/^[^@]+$/.test(validStr)) {
        result += 'No one "@" symbol was detected.';
    }
}
