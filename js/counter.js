// прослушка на всем окне
window.addEventListener('click', function (event) {
    let counter;
    
    // Проверям клик по кнопкам Плюс или Минус
    // Функция - искать родительски <Div> и работать внутри, если мы внутри счетчика
    // Если не внутри то искать родителя и продолжать не нужно, что бы не выдавало null
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
            // находим именно <Div> (родительский) всего счетчика
            const counterWrapper = event.target.closest('.counter-wrapper');

            // находим <Div> с числом счетчика 
            counter = counterWrapper.querySelector('[data-counter]');
    }

    

    // является ли элемент по которому кликнули (event.target) кнопкой Плюс 
    // dataset - атрибут элемента, action - значение data-атрибута
    if (event.target.dataset.action === 'plus') {

            // увеличивем число на 1
            counter.innerText = ++counter.innerText;
    }
    
        
    // является ли элемент по которому кликнули (event.target) кнопкой Минус
    if (event.target.dataset.action === 'minus') {

            // проверяем, чтобы число было больше 1
            if (parseInt(counter.innerText) > 1) {

                // уменьшаем число на 1
                counter.innerText = --counter.innerText;
                
                // проверка на товар внутри корзины
            } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
                // удаляем товар
                event.target.closest('.cart-item').remove();

                // статус корзины
                toggleCartStatus();

                // пересчитывем общую сумму в корзине 
                calcCartPrice();
            }
            
    }

    // провряем клик на - или + внутри корзины
    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
        // пересчитывем общую сумму в корзине 
        calcCartPrice();
    }
});