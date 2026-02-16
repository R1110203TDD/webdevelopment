document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const overlay = document.querySelector('.bg-overlay');
    const blobs = document.querySelector('.bg-blobs');
    const links = document.querySelectorAll('.labo-grid a');

    /* ========== SMOOTH ENTRANCE ========== */
    container.style.opacity = '0';
    container.style.transform = 'scale(0.92) translateY(25px)';

    requestAnimationFrame(() => {
        container.style.transition = 'all 900ms cubic-bezier(0.23, 1, 0.32, 1)';
        container.style.opacity = '1';
        container.style.transform = 'scale(1) translateY(0)';
    });

    /* ========== STAGGERED GRID ANIMATION ========== */
    links.forEach((link, index) => {
        const delay = index * 75;
        setTimeout(() => {
            link.style.opacity = '0';
            link.style.transform = 'translateY(25px) scale(0.9)';
            requestAnimationFrame(() => {
                link.style.transition = 'all 600ms cubic-bezier(0.34, 1.56, 0.64, 1)';
                link.style.opacity = '1';
                link.style.transform = 'translateY(0) scale(1)';
            });
        }, delay);
    });

    /* ========== ENHANCED PARALLAX ========== */
    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = (e.clientY / window.innerHeight) * 2 - 1;

        // Subtiele parallax voor alle elementen
        container.style.transformOrigin = 'center center';
        container.style.transform =
            `translate(${x * 10}px, ${y * 8}px) rotateX(${y * 3}deg) rotateY(${x * 4}deg) scale(1)`;

        if (overlay) overlay.style.transform = `translate(${x * 20}px, ${y * 16}px)`;
        if (blobs) blobs.style.transform = `translate(${x * 40}px, ${y * 32}px)`;
    });

    /* ========== LINK INTERACTIONS ========== */
    links.forEach(link => {
        link.addEventListener('mouseenter', () => link.classList.add('js-hover'));
        link.addEventListener('mouseleave', () => link.classList.remove('js-hover'));

        link.addEventListener('click', (e) => {
            createRipple(link, e);
            link.classList.add('js-clicked');
            setTimeout(() => link.classList.remove('js-clicked'), 250);
        });
    });

    /* ========== ACTIVE PAGE HIGHLIGHT ========== */
    const currentPath = window.location.pathname.replace(/\/+$/, '');
    links.forEach(link => {
        const url = new URL(link.href, window.location.origin);
        if (url.pathname.replace(/\/+$/, '') === currentPath) {
            link.classList.add('active-link');
        }
    });
});

function createRipple(element, event) {
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.8;
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: radial-gradient(circle, rgba(255,255,255,0.7), rgba(255,255,255,0.2) 70%, transparent);
        transform: scale(0);
        animation: rippleEffect 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        pointer-events: none;
        z-index: 10;
    `;

    element.style.position = 'relative';
    element.appendChild(ripple);

    setTimeout(() => ripple.remove(), 700);
}
