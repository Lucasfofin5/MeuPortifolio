// Arquivo script.js completo e atualizado

document.addEventListener('DOMContentLoaded', () => {

    // CÓDIGO EXISTENTE: Animação de "aparecer ao rolar"
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });


    // ==================================================================
    // NOVO CÓDIGO: Mudança de cor de fundo gradual com o scroll
    // ==================================================================

    // Defina as cores da transição.
    // A cor inicial é o nosso cinza claro.
    const corInicial = { r: 248, g: 249, b: 250 }; // Cor: #f8f9fa
    // A cor final é um azul acinzentado suave, que combina com a paleta.
    const corFinal = { r: 221, g: 226, b: 231 };   // Cor: #dde2e7

    // Função que escuta o evento de rolagem da página
    window.addEventListener('scroll', () => {
        // Calcula o ponto máximo de rolagem
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        // Calcula o progresso da rolagem como uma porcentagem (de 0 a 1)
        const scrollProgress = window.scrollY / maxScroll;

        // Garante que o progresso não passe de 1
        const progress = Math.min(scrollProgress, 1);

        // Calcula a nova cor misturando a cor inicial e final com base no progresso
        const r = Math.round(corInicial.r + (corFinal.r - corInicial.r) * progress);
        const g = Math.round(corInicial.g + (corFinal.g - corInicial.g) * progress);
        const b = Math.round(corInicial.b + (corFinal.b - corInicial.b) * progress);

        // Aplica a nova cor de fundo ao body do site
        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });

});
