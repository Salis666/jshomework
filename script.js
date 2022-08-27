// Домашнее задание 1

'use strict';

/* {
            let tCelsius = prompt('Введите температуру в фаренгейтах');
            let tFahrenheit = (9 / 5) * tCelsius + 32;
            alert(tFahrenheit);

            let name = 'Василий';
            let admin = name;
            alert(admin);
} */

// Домашнее задание 2

{
            let a = +prompt('Введите любое число');
            let b = +prompt('Введите любое число');
            if (a > 0) {
                        if (b > 0) {
                                    alert(a / b);
                        } else {
                                    alert(a + b);
                        }
            } else {
                        if (b > 0) {
                                    alert(a + b);
                        } else {
                                    alert(a * b);
                        }
            }
}

{
            let a = 7;
            switch (a) {
                        case 0: alert(0);
                        case 1: alert(1);
                        case 2: alert(2);
                        case 3: alert(3);
                        case 4: alert(4);
                        case 5: alert(5);
                        case 6: alert(6);
                        case 7: alert(7);
                        case 8: alert(8);
                        case 9: alert(9);
                        case 10: alert(10);
                        case 11: alert(11);
                        case 12: alert(12);
                        case 13: alert(13);
                        case 14: alert(14);
                        case 15: alert(15);
            }
}

function add(a, b) {
            return a + b;
}

function sub(a, b) {
            return a - b;
}

function mult(a, b) {
            return a * b;
}

function div(a, b) {
            return a / b;
}

function mathOperation(arg1, arg2, operation) {
            switch (operation) {
                        case ('Сложение'):
                                    return add(arg1, arg2);
                        case ('Вычитание'):
                                    return sub(arg1, arg2);
                        case ('Умножение'):
                                    return mult(arg1, arg2);
                        case ('Деление'):
                                    return div(arg1, arg2);
                        default: return 'Нет такой операции';
            }
}

function power(val, pow) {
            if (pow > 0) {
                        if (pow > 1) {
                                    return val * power(val, pow - 1);
                        } else {
                                    return val;
                        }
            } else if (pow < -1) {
                        return 1 / (val * power(val, -1 * (pow + 1)));
            } else return 1 / val;
}
