function calcCartPrice() {
   const cartItems = document.querySelectorAll('.cart-item');
   const totalPriceEl = document.querySelector('.total-price');

    //общая стоимость товаров    
    let totalPrice = 0;

    cartItems.forEach(function (item) {
        // находим количество товара в счетчике
        const amountEl = item.querySelector('[data-counter]');
        // находим цену товара в карте
        const priceEl = item.querySelector('.price__currency');
        
        // умножаем цену на количество
        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText) ;
        totalPrice += currentPrice;
    });

    // отображаем цену
    totalPriceEl.innerText = totalPrice;
}