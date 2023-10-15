const categoryLinks = document.querySelectorAll('.category');
const postCards = document.querySelectorAll('.post-card');
const postFull = document.querySelectorAll('.post-full');

// Filtro das Categorias
categoryLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        categoryLinks.forEach(link => link.classList.remove('active')); // Remove o filtro destacado
        this.classList.add('active'); // Adiciona a classe 'active' ao filtro clicado

        const selectedCategory = this.getAttribute('data-category'); // Obtém a categoria selecionada
        postCards.forEach(card => { // Percorre todos os cartões
            const cardCategory = card.getAttribute('data-category'); // Obtém a categoria do cartão
            if (selectedCategory === 'all' || selectedCategory === cardCategory) {
                card.style.display = 'block'; // Mostra o cartão
            } else {
                card.style.display = 'none'; // Oculta o cartão
            }
        });
    });
});

// Incremento do Contador das Visualizações e Direciona o Link
postCards.forEach(card => {
    card.addEventListener('click', function () {
        const postID = card.getAttribute('data-post-id'); // Obtém o ID da postagem
        let accessCount = parseInt(localStorage.getItem(`accessCount_${postID}`)) || 0; // Obtém o contador específico
        accessCount++;
        localStorage.setItem(`accessCount_${postID}`, accessCount); // Atualiza o contador no localStorage
        const postLink = card.querySelector('a').getAttribute('href'); // Redireciona para o link
        window.location.href = postLink;
    });
});

// Apresenta as Visualizações na Página Inicial
postCards.forEach(card => {
    const postID = card.getAttribute('data-post-id'); // Obtém o ID da postagem
    const accessCountElement = card.querySelector('.access-count'); // Local para inserir a informação
    accessCount = parseInt(localStorage.getItem(`accessCount_${postID}`)) || 0; // Obtém o valor atual do contador do localStorage
    accessCountElement.textContent = accessCount; // Atualiza o contador no cartão de postagem
});

// Apresenta as Visualizações dentro de cada Post
postFull.forEach(card => {
    const postNum = card.getAttribute('data-post-id'); // Obtém o ID da postagem
    const accessCountElementFull = card.querySelector('.access-count-post'); // Local para inserir a informação
    accessCount = parseInt(localStorage.getItem(`accessCount_${postNum}`)) || 0; // Obtém o valor atual do contador do localStorage
    accessCountElementFull.textContent = accessCount; // Atualiza o contador no cartão de postagem
});
