window.addEventListener('DOMContentLoaded', () => {
    const aboutUs = document.getElementById('about-us');
    if (!aboutUs) return;

    aboutUs.addEventListener('mouseenter', () => {
        aboutUs.style.backgroundColor = '#b5e164ff';
        aboutUs.style.color = '#222';
    });

    aboutUs.addEventListener('mouseleave', () => {
        aboutUs.style.backgroundColor = '';
        aboutUs.style.color = '';
    });
});

