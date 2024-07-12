document.addEventListener('DOMContentLoaded', function () { // Aguarda o carregamento completo do DOM
    const menuButton = document.getElementById('menuButton'); // Seleciona o botão do menu
    const navMenu = document.getElementById('navMenu'); // Seleciona o menu de navegação

    menuButton.addEventListener('click', function () { // Adiciona um evento de clique ao botão do menu
        navMenu.classList.toggle('shown'); // Alterna a classe "shown" no menu de navegação
        menuButton.setAttribute('aria-expanded', navMenu.classList.contains('shown')); // Atualiza o atributo aria-expanded com base na visibilidade do menu
    });

    // Fecha o menu ao clicar fora dele
    document.addEventListener('click', function (event) { // Adiciona um evento de clique ao documento
        if (!navMenu.contains(event.target) && !menuButton.contains(event.target)) { // Verifica se o clique não foi no menu ou no botão
            navMenu.classList.remove('shown'); // Remove a classe "shown" do menu
            menuButton.setAttribute('aria-expanded', 'false'); // Atualiza o atributo aria-expanded para false
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







