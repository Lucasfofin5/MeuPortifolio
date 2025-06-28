document.addEventListener('DOMContentLoaded', () => {

    // Efeito para elementos aparecerem ao rolar a página
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

    // --- LÓGICA CORRIGIDA PARA MUDANÇA DE COR COM SCROLL ---

    const corInicial = { r: 248, g: 249, b: 250 }; // Cor do :root (#f8f9fa)
    const corFinal = { r: 221, g: 226, b: 231 };   // Cor de destino (#dde2e7)

    window.addEventListener('scroll', () => {
        // Altura total da página rolável
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

        // Medida de segurança: se não houver barra de rolagem, não faz nada.
        if (maxScroll <= 0) {
            return;
        }

        // Progresso da rolagem, de 0 (topo) a 1 (final)
        const scrollProgress = window.scrollY / maxScroll;
        
        // Garante que o valor não passe de 1
        const progress = Math.min(scrollProgress, 1);

        // Calcula a cor intermediária com base no progresso
        const r = Math.round(corInicial.r + (corFinal.r - corInicial.r) * progress);
        const g = Math.round(corInicial.g + (corFinal.g - corInicial.g) * progress);
        const b = Math.round(corInicial.b + (corFinal.b - corInicial.b) * progress);

        // Aplica a nova cor de fundo diretamente no body
        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
});
