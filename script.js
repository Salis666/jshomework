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

/* {
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
} */

// Домашнее задание 3

//Задача №1
/* let justingNumbers = 'Простые числа от 0 до 100: ';
let i = 2;

while (i < 101) {
            if ((i != 2 && i != 3)) {
                        if ((i % 2) > 0) {
                                    if ((i % 3) > 0) {
                                                if ((i % 5) > 0) {
                                                            justingNumbers = justingNumbers + ' ' + i;
                                                            ++i;
                                                } else {
                                                            ++i;
                                                }

                                    } else {
                                                ++i;
                                    }
                                    ++i;
                        } else {
                                    ++i;
                        }
            } else {
                        justingNumbers = justingNumbers + ' ' + i;
                        ++i;
            }
}

alert(justingNumbers);

//Задача №2

let basket = [
            // 1. название товара 2. стоимость за 1 штуку 3. Количество штук в корзине
            ['подшипники', 250, 5],
            ['гайки', 5, 50],
            ['прокладки', 30, 40],
            ['трубы', 800, 2],
            ['лампочки', 50, 5],
            ['диоды', 25, 10]
];

function countBasketPrice(basket) {
            let quantityBasket = basket.length;
            let basketPrice = 'Стоимость товаров в корзине:';
            let price = 0;
            for (let i = 0; quantityBasket > 0; i++) {
                        basketPrice = basketPrice + '\n' + (basket[i][0]) + ': ' + (basket[i][1] * +basket[i][2]) + ` рублей за ${basket[i][2]} шт.`;
                        price += (basket[i][1] * basket[i][2]);
                        quantityBasket--;
            }
            basketPrice = basketPrice + '\n' + `Итоговая стоимость всех товаров ${price} рублей`;
            return basketPrice;

}

alert(countBasketPrice(basket));

//Задача №3

for (let i = 0; i < 10; alert(i++)) { }

//Задача №4

let pyramid = '*';

for (let i = 1; i < 21; i++) {
            console.log(pyramid);
            pyramid += '*';
} */

// Домашнее задание 4

//Задача 1

function transformIsNumber(number) {
            if (number > 999) {
                        return console.log('Число превышает допустимое, максимальное число - 999');
            }
            let arrayNumber = (number + '').split('');

            if (arrayNumber.length > 2) {
                        return { units: +arrayNumber[2], tens: +arrayNumber[1], hundreds: +arrayNumber[0] }
            } else if (arrayNumber.length == 2) {
                        return { units: +arrayNumber[2], tens: +arrayNumber[1], hundreds: 0 }
            } else {
                        return { units: +arrayNumber[2], tens: 0, hundreds: 0 }
            }

}

// Задача 2


let bearing = {
            name: 'подшипник',
            price: 250,
            totalPrice(quantity) {
                        return this.price * quantity
            }
};
let nut = {
            name: 'гайки',
            price: 5,
            totalPrice(quantity) {
                        return this.price * quantity
            }
};
let gasket = {
            name: 'прокладки',
            price: 30,
            totalPrice(quantity) {
                        return this.price * quantity
            }
};
let pipe = {
            name: 'трубы',
            price: 800,
            totalPrice(quantity) {
                        return this.price * quantity
            }
};
let lamp = {
            name: 'лампы',
            price: 50,
            totalPrice(quantity) {
                        return this.price * quantity
            }
};

let basket = [
            bearing.totalPrice(5),
            nut.totalPrice(50),
            gasket.totalPrice(40),
            pipe.totalPrice(2),
            lamp.totalPrice(5)
];

function countBasketPrice(basket) {
            let basketPrice = 0;
            for (let i = 0; i < basket.length; i++) {
                        basketPrice += basket[i];
            }
            return basketPrice;
}

/* alert(countBasketPrice(basket)); */

//Домашнее задание 5

// Задача № 1

let desk = document.querySelector('.desk');
const horizontal = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let vertical = 1;

function checkForParity(number) {
            if ((number % 2) == 0) {
                        return true
            } else return false
}

for (let i = 10; i > 0; i--) {
            let tr = document.createElement('tr');
            desk.appendChild(tr);
            for (let a = 0; a < 10; a++) {
                        let td = document.createElement('td');
                        td.style.padding = '30px';
                        if (checkForParity(i)) {
                                    if (i < 10 && a > 0 && i > 1 && a < 9 && checkForParity(a)) {
                                                td.style.backgroundColor = 'black'
                                    }
                        } else {
                                    if (i < 10 && a > 0 && i > 1 && a < 9 && !checkForParity(a)) {
                                                td.style.backgroundColor = 'black'
                                    }
                        }
                        tr.appendChild(td);
                        if ((i == 10 && a > 0) || (i == 1 && a > 0)) {
                                    td.textContent = horizontal[a];
                        }
                        if (i < 10 && i > 1 && a == 0) {
                                    td.textContent = `${i - 1}`;
                        }
                        if (i < 10 && i > 1 && a == 9) {
                                    td.textContent = `${vertical}`;
                                    vertical++;
                        }
                        td.style.border = '1px solid #000000';
            }
}


// Задача № 2

let visualBasket = document.querySelector('.basket');
let textVisualBasket = document.createElement('p');
visualBasket.appendChild(textVisualBasket);

if (basket.length > 0) {
            textVisualBasket.textContent = `В корзине ${basket.length} товаров на сумму ${countBasketPrice(basket)} рублей`;
} else {
            textVisualBasket.textContent = 'Корзина пуста';
}

// Задача № 3

let catalog = [bearing, nut, gasket, pipe, lamp];
let visualCatalog = document.getElementById('catalog');
let textVisualCatalog = document.createElement('ul');
visualCatalog.appendChild(textVisualCatalog);

for (let i = catalog.length; i > 0; i--) {
            let li = document.createElement('li');
            li.textContent = `${catalog[i - 1].name} - ${catalog[i - 1].price} рублей`;
            textVisualCatalog.appendChild(li);
}