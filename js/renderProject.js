const productContainer = document.querySelector('#product-container')

getProduct();

async function getProduct() {
   const response = await fetch('./js/product.json');

    // массив с продуктами получен и помещен в константу productArray  
   const productArray = await response.json();

   renderProduct(productArray);
}


// рендерим продукты с помощью функции
// функция принимает в себя массив с продуктами
function renderProduct(productArray) {

    // обойдет массив
    productArray.forEach(function (item) {  
        // для каждого элемента сгенерирует такую разметку (шаблон продукта из шаблона HTML)
        const productHTML = `<div class="col-md-6">
        <div class="card mb-4" data-id="${item.id}">
            <img class="product-img" src="img/roll/${item.imgSrc}" alt="">
            <div class="card-body text-center">
                <h4 class="item-title">${item.title}</h4>
                <p><small data-items-in-box class="text-muted">${item.itemsInBox}шт.</small></p>

                <div class="details-wrapper">

                    <!-- Счетчик -->
                    <div class="items counter-wrapper">
                        <div class="items__control" data-action="minus">-</div>
                        <div class="items__current" data-counter>1</div>
                        <div class="items__control" data-action="plus">+</div>
                    </div>
                    <!-- //Счетчик -->

                    <div class="price">
                        <div class="price__weight">${item.weight}г.</div>
                        <div class="price__currency">${item.price} ₽</div>
                    </div>
                </div>

                <button data-cart type="button" class="btn btn-block btn-outline-warning">+ в корзину</button>

            </div>
        </div>
        </div>`;
        // поместим в див с айди, который в товарах и с помощью метода insertAdjacentHTML'beforeend'
        // каждый товар будем добавлять в конец после предыдущего товара.
        productContainer.insertAdjacentHTML('beforeend', productHTML)        
    });
}