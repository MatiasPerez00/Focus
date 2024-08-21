const glow = document.getElementById('glow');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    glow.style.left = `${x - 200}px`; 
    glow.style.top = `${y - 200}px`;
});