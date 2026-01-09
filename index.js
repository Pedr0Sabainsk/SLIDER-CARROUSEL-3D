function changeSmoothie(fruit) {
    const bowls = document.getElementById('bowls');
    
    // Remove todas as classes
    bowls.className = '';
    
    // Adiciona a classe da fruta
    bowls.classList.add(fruit);
    
    // Muda a cor de fundo
    const body = document.querySelector('body');
    body.style.backgroundColor = `var(--${fruit}-background)`;

    const circle = document.getElementById('circle');
    circle.style.backgroundColor = `var(--${fruit}-circle)`;
}