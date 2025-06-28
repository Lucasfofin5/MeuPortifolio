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

    // LÓGICA PARA MUDANÇA DE COR COM SCROLL
    const corInicial = { r: 248, g: 249, b: 250 };
    const corFinal = { r: 230, g: 224, b: 248 };

    window.addEventListener('scroll', () => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        if (maxScroll <= 0) { return; }
        const progress = Math.min(window.scrollY / maxScroll, 1);
        const r = Math.round(corInicial.r + (corFinal.r - corInicial.r) * progress);
        const g = Math.round(corInicial.g + (corFinal.g - corInicial.g) * progress);
        const b = Math.round(corInicial.b + (corFinal.b - corInicial.b) * progress);
        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });

    // ================================================================
    // NOVO CÓDIGO: LÓGICA DO CURSOR PERSONALIZADO E INTERATIVO
    // ================================================================

    const cursor = document.querySelector('.custom-cursor');

    // Atualiza a posição do cursor
    window.addEventListener('mousemove', e => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Adiciona a classe 'hover' quando o mouse passa por cima de elementos interativos
    const interactiveElements = document.querySelectorAll('a, button, .accordion-title');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });

});
