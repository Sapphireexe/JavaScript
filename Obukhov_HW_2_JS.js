// JS. HW_2

// Напишите валидационный скрипт, используя функции.

//  1. Скрипт должен на вход принимать строку.
//  2. После проверки строки выводить в консоль сообщение, где будет конкретно написано, что не так в введённой строке.
//  3. Минимум 5 символов в строке
//  4. Максимум 64 символа в строке
//  5. В строке должны быть буквы
//  6. Должна быть хотя бы одна буква в верхнем регистре
//  7. Должна быть хотя бы одна цифра
//  8. Должна быть хотя бы одна @
//  9. Строка не должна быть пустой

//let validstr = prompt('Input from 5 to 64 symbols. Should include at least one uppercase letter, one number and one @'); // for input from prompt window
let validStr = '  Input from 5 to 64 symbols. Should include   at least one uppercase letter, one number and one @'; // for input from code

console.log(vLength(validStr));

function vLength() {
    if (validStr.trim().length >= 5 && validStr.trim().length <= 64 && validStr.trim().length == validStr.length) { // check for length from 5 to 64 symbols with no spaces at string begin/end
        return vContent(validStr);
    }
    else if (validStr.trim().length >= 5 && validStr.trim().length <= 64 && validStr.trim().length < validStr.length) { // check for length from 5 to 64 symbols, also contains spaces at string begin/end
      return 'Spaces at string begin and (or) end were detected: ' + (validStr.length-validStr.trim().length) + ' space(s). ' + vContent(validStr);
    }
    else if (validStr.trim().length > 0 && validStr.trim().length < 5 && validStr.trim().length == validStr.length || validStr.trim().length > 64 && validStr.trim().length == validStr.length) { // check for length less than 5 or more than 64 symbols with no spaces at string begin/end
        return 'Wrong length: ' + validStr.length + ' symbol(s). ' + vContent(validStr);
    }
    else if (validStr.trim().length > 0 && validStr.trim().length < 5 && validStr.trim().length < validStr.length || validStr.trim().length > 64 && validStr.trim().length < validStr.length) { // check for length less than 5 or more than 64 symbols, also contains spaces at string begin/end
        return 'Wrong length: ' + validStr.trim().length + ' symbol(s), also detected spaces at string begin and (or) end: ' + (validStr.length-validStr.trim().length) + ' space(s). ' + vContent(validStr);
    }
    else if (validStr.trim().length == 0 && validStr.length != 0) { // check for spaces only
        return 'Only spaces were detected: ' + validStr.length + ' space(s).';
    }
    else { // check for empty string
        return 'Empty string.';
    }
}


function vContent() {
    if (/^(?=.*[A-ZА-ЯЁ])(?=.*[0-9])(?=.*@)[A-ZА-ЯЁa-zа-яё0-9@]+$/.test(validStr)) { // check for correct data
        return 'Correct string: ' + validStr;
    }
    else {
        return vContent1(validStr);
    }
}

function vContent1() {
    if (!(/^(?=.*[A-ZА-ЯЁ])[\w\W]+$/.test(validStr))) { // check for Uppercase
        return 'No one uppercase was detected. ' + vContent2(validStr);
    }
    else {
        return vContent2(validStr);
    }
}

function vContent2() {
    if (!(/^(?=.*[0-9])[\w\W]+$/.test(validStr))) { // check for Number presented
        return 'No one numeric symbol was detected. ' + vContent3(validStr);
    }
    else {
        return vContent3(validStr);
    }
}

function vContent3() {
    if (!(/^(?=.*@)[\w\W]+$/.test(validStr))) { // check for @
        return 'No one "@" was detected. ' + vContent4(validStr);
    }
    else {
        return vContent4(validStr);
    }
}

function vContent4() {
    if (!(/^[A-ZА-ЯЁa-zа-яё0-9@]+$/.test(validStr))) { // check for invalid symbols
        let result = validStr.split(/[A-ZА-ЯЁa-zа-яё0-9@]*/);
        return 'Invalid symbols detected: ' + result;
    }
    else {
        return 'Error 404: please, call Tolya Support.'; // shouldn't be true in my code, but in case I miss something, please, report me about that error and string
    }
}
