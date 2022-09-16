
'use strict';

/* function transformIsNumber(number) {
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

} */

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
            outAmount() {
                        return this.amount = this.amount - 1
            },
            basketProductsPush() {
                        if (basket.productsInFilter(this)) {
                                    basket.basketProducts.push(this);
                        }
                        this.addAmount();
                        basket.initBasketVisualPrice();
                        textBascetCompozition.textContent = basket.initBasketCompizition();
            },
            basketProductsOut() {
                        if (this.amount > 1) {
                                    this.outAmount();
                        } else if (this.amount == 0) {
                                    return;
                        } else {
                                    basket.basketProducts.splice(basket.basketProducts.indexOf(bearing), 1);
                                    this.outAmount();
                        }
                        basket.initBasketVisualPrice();
                        textBascetCompozition.textContent = basket.initBasketCompizition();
            }

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
            outAmount() {
                        return this.amount = this.amount - 1
            },
            basketProductsPush() {
                        if (basket.productsInFilter(this)) {
                                    basket.basketProducts.push(this);
                        }
                        this.addAmount();
                        basket.initBasketVisualPrice();
                        textBascetCompozition.textContent = basket.initBasketCompizition();
            },
            basketProductsOut() {
                        if (this.amount > 1) {
                                    this.outAmount();
                        } else if (this.amount == 0) {
                                    return;
                        } else {
                                    basket.basketProducts.splice(basket.basketProducts.indexOf(bearing), 1);
                                    this.outAmount();
                        }
                        basket.initBasketVisualPrice();
                        textBascetCompozition.textContent = basket.initBasketCompizition();
            }
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
            outAmount() {
                        return this.amount = this.amount - 1
            },
            basketProductsPush() {
                        if (basket.productsInFilter(this)) {
                                    basket.basketProducts.push(this);
                        }
                        this.addAmount();
                        basket.initBasketVisualPrice();
                        textBascetCompozition.textContent = basket.initBasketCompizition();
            },
            basketProductsOut() {
                        if (this.amount > 1) {
                                    this.outAmount();
                        } else if (this.amount == 0) {
                                    return;
                        } else {
                                    basket.basketProducts.splice(basket.basketProducts.indexOf(bearing), 1);
                                    this.outAmount();
                        }
                        basket.initBasketVisualPrice();
                        textBascetCompozition.textContent = basket.initBasketCompizition();
            }
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
            outAmount() {
                        return this.amount = this.amount - 1
            },
            basketProductsPush() {
                        if (basket.productsInFilter(this)) {
                                    basket.basketProducts.push(this);
                        }
                        this.addAmount();
                        basket.initBasketVisualPrice();
                        textBascetCompozition.textContent = basket.initBasketCompizition();
            },
            basketProductsOut() {
                        if (this.amount > 1) {
                                    this.outAmount();
                        } else if (this.amount == 0) {
                                    return;
                        } else {
                                    basket.basketProducts.splice(basket.basketProducts.indexOf(bearing), 1);
                                    this.outAmount();
                        }
                        basket.initBasketVisualPrice();
                        textBascetCompozition.textContent = basket.initBasketCompizition();
            }
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
            outAmount() {
                        return this.amount = this.amount - 1
            },
            basketProductsPush() {
                        if (basket.productsInFilter(this)) {
                                    basket.basketProducts.push(this);
                        }
                        this.addAmount();
                        basket.initBasketVisualPrice();
                        textBascetCompozition.textContent = basket.initBasketCompizition();
            },
            basketProductsOut() {
                        if (this.amount > 1) {
                                    this.outAmount();
                        } else if (this.amount == 0) {
                                    return;
                        } else {
                                    basket.basketProducts.splice(basket.basketProducts.indexOf(bearing), 1);
                                    this.outAmount();
                        }
                        basket.initBasketVisualPrice();
                        textBascetCompozition.textContent = basket.initBasketCompizition();
            }
}

let visualCatalog = document.getElementById('catalog');
let textVisualCatalog = document.createElement('ul');
let bigImbBoxVisual = document.querySelector('.noVisual');
let bigImage = document.querySelector('.bigImg_img');

let catalog = {
            products: [bearing, nut, gasket, pipe, lamp],
            btnBox: [],
            btnOfBox: [],
            getVisualCatalog() {
                        visualCatalog.appendChild(textVisualCatalog);
                        visualCatalog.style = 'width: 400px';
                        for (let i = this.products.length; i > 0; i--) {
                                    let li = document.createElement('li');
                                    li.textContent = `${this.products[i - 1].name} - ${this.products[i - 1].price} рублей`;
                                    textVisualCatalog.appendChild(li);
                                    li.style = 'display: flex;\njustify-content: space-between;';
                                    let btn = document.createElement('button');
                                    let btnOf = document.createElement('button');
                                    this.btnBox[i - 1] = btn;
                                    this.btnBox[i - 1].textContent = 'Купить';
                                    li.appendChild(this.btnBox[i - 1]);
                                    this.btnBox[i - 1].addEventListener('click', function () { catalog.products[i - 1].basketProductsPush() });
                                    this.btnOfBox[i - 1] = btnOf;
                                    this.btnOfBox[i - 1].textContent = 'Удалить';
                                    li.appendChild(this.btnOfBox[i - 1]);
                                    this.btnOfBox[i - 1].addEventListener('click', function () { catalog.products[i - 1].basketProductsOut() });
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
                                                break;
                                    case "pic/imgButton/rightArrow.png":
                                                this.bigPhotoFilterArrowRight(bigImage.getAttribute('src'));
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
            },

}

let buttonImg = document.querySelector('.bigImg_buttonBox').addEventListener('click', b => { catalog.buttonImgFilter(b) });



let visualBasket = document.querySelector('.basket');
let textVisualBasket = document.createElement('p');
visualBasket.appendChild(textVisualBasket);
let basketCompozition = document.querySelector(".basketCompozition");
let textBascetCompozition = document.querySelector('.basketCompozition_text');
let adressBox = document.querySelector('.adress');
let commentBox = document.querySelector('.comment');


let basket = {
            basketProducts: [],
            productsInFilter(prod) {
                        let result = true;
                        for (let i = this.basketProducts.length; i > 0; i--) {
                                    if (this.basketProducts[i - 1] === prod) {
                                                result = false;
                                                return result;
                                    } else result = true;
                        };
                        return result;
            },
            countBasketPrice() {

                        if (this.basketProducts.length > 0) {

                                    let bigTotalPrice = 0;

                                    for (let i = 0; i < this.basketProducts.length; i++) {
                                                bigTotalPrice += this.basketProducts[i].totalPrice();
                                    }
                                    return bigTotalPrice;
                        } else return 0;
            },
            basketPrice: 0,

            basketProductsComplect() {
                        let totalComplect = 0;
                        if (this.basketProducts.length > 0) {
                                    for (let i = this.basketProducts.length; i > 0; i--) {
                                                totalComplect += this.basketProducts[i - 1].amount;
                                    }
                        }
                        return totalComplect;
            },

            buttonCompozitionIndikator: 0,
            buttonAdressIndikator: 0,
            buttonCommentIndikator: 0,

            initBasketVisualPrice() {
                        if (basket.basketProducts.length > 0) {
                                    textVisualBasket.textContent = `В корзине ${this.basketProductsComplect()} товаров на сумму ${this.countBasketPrice()} рублей`;
                        } else {
                                    textVisualBasket.textContent = 'Корзина пуста';
                        }
            },
            initBasketCompizition() {
                        let text = `Ваши товары: `;
                        for (let i = this.basketProducts.length; i > 0; i--) {
                                    text += `\n ${this.basketProducts[i - 1].name} - ${this.basketProducts[i - 1].amount} шт.`
                        }
                        return text;

            },
            openCompozition() {
                        if (this.buttonCompozitionIndikator == 0) {
                                    this.buttonCompozitionIndikator = 1;
                                    basketCompozition.className = "basketCompozition";
                        } else {
                                    basketCompozition.className = "basketCompozition buttonVisualNot";
                                    this.buttonCompozitionIndikator = 0;
                        }
            },
            openAdress() {
                        if (this.buttonAdressIndikator == 0) {
                                    this.buttonAdressIndikator = 1;
                                    adressBox.className = "adress";
                        } else {
                                    adressBox.className = "adress adressVisualNot";
                                    this.buttonAdressIndikator = 0;
                        }
            },
            openComment() {
                        if (this.buttonCommentIndikator == 0) {
                                    this.buttonCommentIndikator = 1;
                                    commentBox.className = "comment";
                        } else {
                                    commentBox.className = "comment commentVisualNot";
                                    this.buttonCommentIndikator = 0;
                        }
            },


}

let buttonBasketCompozition = document.querySelector('.buttonBasketCompozition').addEventListener('click', () => basket.openCompozition());
let buttonAdressTextIn = document.querySelector('.adressButton').addEventListener('click', () => basket.openAdress());
let buttonCommentTextIn = document.querySelector('.commentButton').addEventListener('click', () => basket.openComment());
let buttonCompozitionNext = document.querySelector('.compozitionNext').addEventListener('click', () => {
            basket.openCompozition();
            basket.openAdress();
});
let buttonAdressNext = document.querySelector('.adressNext').addEventListener('click', () => {
            basket.openAdress();
            basket.openComment();
});
let buttonCommentNext = document.querySelector('.commentNext').addEventListener('click', () => basket.openComment());
catalog.getVisualCatalog();
basket.initBasketVisualPrice();


