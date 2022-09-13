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

}
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
}
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
}
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
}
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
}

let visualCatalog = document.getElementById('catalog');
let textVisualCatalog = document.createElement('ul');
let bigImbBoxVisual = document.querySelector('.noVisual');
let bigImage = document.querySelector('.bigImg_img');

let catalog = {
            products: [bearing, nut, gasket, pipe, lamp],
            btnBox: [],
            getVisualCatalog() {
                        visualCatalog.appendChild(textVisualCatalog);
                        visualCatalog.style = 'width: 300px';
                        for (let i = this.products.length; i > 0; i--) {
                                    let li = document.createElement('li');
                                    li.textContent = `${this.products[i - 1].name} - ${this.products[i - 1].price} рублей`;
                                    textVisualCatalog.appendChild(li);
                                    li.style = 'display: flex;\njustify-content: space-between;';
                                    let btn = document.createElement('button');
                                    this.btnBox[i - 1] = btn;
                                    this.btnBox[i - 1].textContent = 'Купить';
                                    li.appendChild(this.btnBox[i - 1]);
                                    this.btnBox[i - 1].addEventListener('click', function () { catalog.products[i - 1].basketProductsPush() });
                        }
                        let boxImg = document.querySelector('.boxImg_catalog').addEventListener('click', (e) => { this.containerImgFilter(e) });

            },
            containerImgFilter(e) {
                        if (e.target.tagName !== 'IMG') return;
                        this.openImg(e.target.dataset.full_image_url);

            },
            openImg(url) {
                        bigImbBoxVisual.className = "bigImg";
                        switch (url) {
                                    case "pic/min/pipe_min.png":
                                                bigImage.src = "pic/big/pipe_big.jpg";
                                                break;
                                    case "pic/min/nut_min.png":
                                                bigImage.src = "pic/big/nut_big.jpg";
                                                break;
                                    case "pic/min/lamp_min.png":
                                                bigImage.src = "pic/big/lamp_big.jpg";
                                                break;
                                    case "pic/min/bearing_min.png":
                                                bigImage.src = "pic/big/bearing.jpg";
                                                break;
                        }

            },
            buttonImgFilter(b) {
                        if (b.target.tagName !== 'IMG') return;
                        this.actionButton(b.target.dataset.full_image_url);
            },
            actionButton(url) {
                        switch (url) {
                                    case "pic/imgButton/cross.png":
                                                bigImbBoxVisual.classList.add("noVisual");
                                                break;
                                    case "pic/imgButton/leftArrow.png":
                                                this.bigPhotoFilterArrowLeft(bigImage.getAttribute('src'));
                                                //console.log('click left');
                                                break;
                                    case "pic/imgButton/rightArrow.png":
                                                this.bigPhotoFilterArrowRight(bigImage.getAttribute('src'));
                                                //console.log('click right');
                                                break;
                        }
            },
            bigPhotoFilterArrowLeft(src) {
                        switch (src) {
                                    case "pic/big/pipe_big.jpg":
                                                bigImage.src = "pic/big/pipe_disassembly.jpg";
                                                console.log('YAP');
                                                break;
                                    case "pic/big/pipe_disassembly.jpg":
                                                bigImage.src = "pic/big/pipe_several.jpg";
                                                break;
                                    case "pic/big/pipe_several.jpg":
                                                bigImage.src = "pic/big/pipe_big.jpg";
                                                break;
                                    case "pic/big/nut_big.jpg":
                                                bigImage.src = "pic/big/nut_left.jpg"
                                                break;
                                    case "pic/big/nut_left.jpg":
                                                bigImage.src = "pic/big/nut_up.jpg";
                                                break;
                                    case "pic/big/nut_up.jpg":
                                                bigImage.src = "pic/big/nut_big.jpg";
                                                break;
                                    case "pic/big/lamp_big.jpg":
                                                bigImage.src = "pic/big/lamp_white.jpg";
                                                break;
                                    case "pic/big/lamp_white.jpg":
                                                bigImage.src = "pic/big/lamp_big.jpg";
                                                break;
                                    case "pic/big/bearing.jpg":
                                                bigImage.src = "pic/big/bearing_disassembly.jpg";
                                                break;
                                    case "pic/big/bearing_disassembly.jpg":
                                                bigImage.src = "pic/big/bearing.jpg";
                                                break;
                        }
                        //console.log('После свича');
            },
            bigPhotoFilterArrowRight(src) {
                        switch (src) {
                                    case "pic/big/pipe_big.jpg":
                                                bigImage.src = "pic/big/pipe_several.jpg";
                                                break;
                                    case "pic/big/pipe_several.jpg":
                                                bigImage.src = "pic/big/pipe_disassembly.jpg";
                                                break;
                                    case "pic/big/pipe_disassembly.jpg":
                                                bigImage.src = "pic/big/pipe_big.jpg";
                                                break;
                                    case "pic/big/nut_big.jpg":
                                                bigImage.src = "pic/big/nut_up.jpg";
                                                break;
                                    case "pic/big/nut_up.jpg":
                                                bigImage.src = "pic/big/nut_left.jpg";
                                                break;
                                    case "pic/big/nut_left.jpg":
                                                bigImage.src = "pic/big/nut_big.jpg";
                                                break;
                                    case "pic/big/lamp_big.jpg":
                                                bigImage.src = "pic/big/lamp_white.jpg";
                                                break;
                                    case "pic/big/lamp_white.jpg":
                                                bigImage.src = "pic/big/lamp_big.jpg";
                                                break;
                                    case "pic/big/bearing.jpg":
                                                bigImage.src = "pic/big/bearing_disassembly.jpg";
                                                break;
                                    case "pic/big/bearing_disassembly.jpg":
                                                bigImage.src = "pic/big/bearing.jpg";
                                                break;
                        }
            }

}

let buttonImg = document.querySelector('.bigImg_buttonBox').addEventListener('click', b => { catalog.buttonImgFilter(b) });



let visualBasket = document.querySelector('.basket');
let textVisualBasket = document.createElement('p');
visualBasket.appendChild(textVisualBasket);

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

}

catalog.getVisualCatalog();
basket.initBasketVisualPrice();


