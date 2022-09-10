// Домашнее задание 1

'use strict';

// Домашнее задание 4

//Задача 1

function transformIsNumber(number) {
            if (number > 999) {
                        return console.log('Число превышает допустимое, максимальное число - 999');
            } else if (number < 0) {
                        return console.log('Число не должно быть отрицательным');
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
            amount: 0,
            totalPrice() {
                        return this.price * this.amount
            },
            addAmount() {
                        this.amount = this.amount + 1;
            },
            basketProductsPush() {
                        basket.basketProducts.push(this);
                        basket.initBasketVisualPrice();
                        this.addAmount();
            },

};
let nut = {
            name: 'гайки',
            price: 5,
            amount: 0,
            totalPrice() {
                        return this.price * this.amount
            },
            addAmount() {
                        this.amount = this.amount + 1;
            },
            basketProductsPush() {
                        basket.basketProducts.push(this);
                        basket.initBasketVisualPrice();
                        this.addAmount();
            },
};
let gasket = {
            name: 'прокладки',
            price: 30,
            amount: 0,
            totalPrice() {
                        return this.price * this.amount
            },
            addAmount() {
                        this.amount = this.amount + 1;
            },
            basketProductsPush() {
                        basket.basketProducts.push(this);
                        basket.initBasketVisualPrice();
                        this.addAmount();
            },
};
let pipe = {
            name: 'трубы',
            price: 800,
            amount: 0,
            totalPrice() {
                        return this.price * this.amount
            },
            addAmount() {
                        this.amount = this.amount + 1;
            },
            basketProductsPush() {
                        basket.basketProducts.push(this);
                        basket.initBasketVisualPrice();
                        this.addAmount();
            },
};
let lamp = {
            name: 'лампы',
            price: 50,
            amount: 0,
            totalPrice() {
                        return this.price * this.amount
            },
            addAmount() {
                        return this.amount = this.amount + 1;
            },
            basketProductsPush() {
                        basket.basketProducts.push(this);
                        basket.initBasketVisualPrice();
                        this.addAmount();
            },
};

let visualBasket = document.querySelector('.basket');
let textVisualBasket = document.createElement('p');
visualBasket.appendChild(textVisualBasket);

let catalog = [bearing, nut, gasket, pipe, lamp];
let visualCatalog = document.getElementById('catalog');
let textVisualCatalog = document.createElement('ul');
visualCatalog.appendChild(textVisualCatalog);
visualCatalog.style = 'width: 300px'

let basket = {
            basketProducts: [],
            countBasketPrice() {

                        if (this.basketProducts.length > 0) {

                                    let bigTotalPrice = 0;

                                    for (let i = 0; i < this.basketProducts.length; i++) {
                                                bigTotalPrice += this.basketProducts[i].price;
                                    }
                                    return bigTotalPrice;


                        } else return 0;
            },
            basketPrice: 0,

            initBasketVisualPrice() {
                        if (basket.basketProducts.length > 0) {
                                    textVisualBasket.textContent = `В корзине ${this.basketProducts.length} товаров на сумму ${this.countBasketPrice()} рублей`;
                        } else {
                                    textVisualBasket.textContent = 'Корзина пуста';
                        }
            }
};

let btnBox = [];

for (let i = catalog.length; i > 0; i--) {
            let li = document.createElement('li');
            li.textContent = `${catalog[i - 1].name} - ${catalog[i - 1].price} рублей`;
            textVisualCatalog.appendChild(li);
            li.style = 'display: flex;\njustify-content: space-between;';
            let btn = document.createElement('button');
            btnBox[i - 1] = btn;
            btnBox[i - 1].textContent = 'Купить';
            li.appendChild(btnBox[i - 1]);
            btnBox[i - 1].addEventListener('click', function () { catalog[i - 1].basketProductsPush() });
}

basket.initBasketVisualPrice();

