function toggleCartStatus() {

    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartEmptyBadge = document.querySelector('[data-cart-empty]');
    const orderForm = document.querySelector('#order-form');

        // если в корзине есть товар то "корзина пуста" исчезает
    if (cartWrapper.children.length > 0) {
        cartEmptyBadge.classList.add('none');

        // если в корзине есть товар то "оформить заказ" появляется
        orderForm.classList.remove('none');

    }else {
        cartEmptyBadge.classList.remove('none');
        orderForm.classList.add('none');
    }
}