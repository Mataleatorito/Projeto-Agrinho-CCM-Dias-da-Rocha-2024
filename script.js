document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menuButton');
    const navMenu = document.getElementById('navMenu');

    menuButton.addEventListener('click', function () {
        navMenu.classList.toggle('shown');
        menuButton.setAttribute('aria-expanded', navMenu.classList.contains('shown'));

        if (window.innerWidth <= 768) {
            document.body.classList.toggle('no-scroll', navMenu.classList.contains('shown'));
        }
    });

    document.addEventListener('click', function (event) {
        if (!navMenu.contains(event.target) && !menuButton.contains(event.target)) {
            navMenu.classList.remove('shown');
            menuButton.setAttribute('aria-expanded', 'false');

            if (window.innerWidth <= 768) {
                document.body.classList.remove('no-scroll');
            }
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsList = document.getElementById('cart-items');
    const checkoutButton = document.getElementById('checkout');
    const totalValueText = document.getElementById('total-value');

    let total = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.dataset.product;
            const productPrice = parseFloat(this.dataset.price);

            const cartItem = document.createElement('li');
            cartItem.textContent = `${productName} - R$ ${productPrice.toFixed(2)}`;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'X';
            removeButton.classList.add('remove-from-cart');

            removeButton.addEventListener('click', function() {
                cartItemsList.removeChild(cartItem);
                recalculateTotal();
            });

            cartItem.appendChild(removeButton);
            cartItemsList.appendChild(cartItem);

            total += productPrice;
            totalValueText.textContent = `Valor Total: R$ ${total.toFixed(2)}`;
        });
    });

    checkoutButton.addEventListener('click', function() {
        // Redirecionar para a página de pagamento com o valor total como parâmetro
        window.location.href = `pagamento.html?total=${total.toFixed(2)}`;
    });

    function recalculateTotal() {
        total = 0;
        cartItemsList.querySelectorAll('li').forEach(item => {
            const itemPrice = parseFloat(item.textContent.split(' - ')[1].replace('R$ ', ''));
            total += itemPrice;
        });
        totalValueText.textContent = `Valor Total: R$ ${total.toFixed(2)}`;
    }
});
