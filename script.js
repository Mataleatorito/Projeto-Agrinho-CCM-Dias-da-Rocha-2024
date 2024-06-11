document.addEventListener('DOMContentLoaded', function() { // Aguarda o carregamento completo do DOM
    const menuButton = document.getElementById('menuButton'); // Seleciona o botão do menu
    const navMenu = document.getElementById('navMenu'); // Seleciona o menu de navegação

    menuButton.addEventListener('click', function() { // Adiciona um evento de clique ao botão do menu
        navMenu.classList.toggle('shown'); // Alterna a classe "shown" no menu de navegação
        menuButton.setAttribute('aria-expanded', navMenu.classList.contains('shown')); // Atualiza o atributo aria-expanded com base na visibilidade do menu
    });

    // Fecha o menu ao clicar fora dele
    document.addEventListener('click', function(event) { // Adiciona um evento de clique ao documento
        if (!navMenu.contains(event.target) && !menuButton.contains(event.target)) { // Verifica se o clique não foi no menu ou no botão
            navMenu.classList.remove('shown'); // Remove a classe "shown" do menu
            menuButton.setAttribute('aria-expanded', 'false'); // Atualiza o atributo aria-expanded para false
        }
    });
});