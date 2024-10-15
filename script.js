function toggleNav() {
    const nav = document.getElementById('navLinks');
    const burger = document.getElementById('burger');

    // Toggle nav visibility on mobile
    nav.classList.toggle('nav-active');

    // Animate burger menu
    burger.classList.toggle('toggle');
}




