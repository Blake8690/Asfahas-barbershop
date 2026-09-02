// Menu toggle
const menuBtn = document.getElementById('menuBtn');
const navMobile = document.getElementById('navMobile');

if (menuBtn && navMobile) {
    menuBtn.addEventListener('click', () => navMobile.classList.toggle('show'));
    document.addEventListener('click', (e) => {
        if (!menuBtn.contains(e.target) && !navMobile.contains(e.target)) {
            navMobile.classList.remove('show');
        }
    });
    navMobile.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => navMobile.classList.remove('show'));
    });
}

// Scroll reveal
function revealVisible() {
    document.querySelectorAll('.reveal:not(.revealed)').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 20) {
            el.classList.add('revealed');
        }
    });
}

window.addEventListener('scroll', revealVisible, { passive: true });
window.addEventListener('load', revealVisible);
revealVisible();