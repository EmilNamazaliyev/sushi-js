//  <Div> - внутри корзины, в который мы добавляем товары
const cartWrapper = document.querySelector('.cart-wrapper');
// Стоимость заказа
const totalCart = document.querySelector('.cart-total') 

window.addEventListener('click', function (event)  {
    // проверяем клик по кнопке "в корзину"
    if (event.target.hasAttribute('data-cart')) {
        // находим карточку внутри которого произошел клик
        const card = event.target.closest('.card');
        console.log(card);

        // объект
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        };

        // провремяем есть ли данный товар в карзине
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
        console.log(itemInCart);

        // если товар есть в корзине
        if (itemInCart) {
           const dataElement = itemInCart.querySelector('[data-counter]');
           dataElement.innerText = parseInt(dataElement.innerText) + parseInt(productInfo.counter);

           // сбрасываем счетчик
           card.querySelector('[data-counter]').innerText = '1';
        }else { 
            // если товара нет в корзине

            // данные из объекта поставим в шаблон корзины из HTML
            const cartItemHTML = 
            `<div class="cart-item" data-id="${productInfo.id}">
                <div class="cart-item__top">
                    <div class="cart-item__img">
                        <img src="${productInfo.imgSrc}" alt="">
                    </div>
                    <div class="cart-item__desc">
                        <div class="cart-item__title">${productInfo.title}</div>
                        <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

                        <!-- cart-item__details -->
                        <div class="cart-item__details">

                            <div class="items items--small counter-wrapper">
                                <div class="items__control" data-action="minus">-</div>
                                <div class="items__current" data-counter="">${productInfo.counter}</div>
                                <div class="items__control" data-action="plus">+</div>
                            </div>

                            <div class="price">
                                <div class="price__currency">${productInfo.price}</div>
                            </div>

                        </div>
                        <!-- // cart-item__details -->

                    </div>
                </div>
            </div>`;

            // отобразим товар в корзине
            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);

        }
        
        // сбрасываем счетчик
        card.querySelector('[data-counter]').innerText = '1';

        // статус корзины
        toggleCartStatus();

        // общая стоимость товара
        calcCartPrice();
    }
});