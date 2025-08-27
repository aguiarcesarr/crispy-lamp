document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.getElementById('navbar');
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');
    const line3 = document.getElementById('line3');

    // --- Mobile Menu Toggle ---
    mobileMenuButton.addEventListener('click', () => {
        const isMenuOpen = mobileMenu.classList.contains('h-auto');

        if (isMenuOpen) {
            // Close menu
            mobileMenu.classList.remove('h-auto', 'py-2');
            mobileMenu.classList.add('h-0');
            // Animate hamburger icon back to original state
            line1.classList.remove('rotate-45', 'translate-y-1.5');
            line2.classList.remove('opacity-0');
            line3.classList.remove('-rotate-45', '-translate-y-1.5');
        } else {
            // Open menu
            mobileMenu.classList.remove('h-0');
            mobileMenu.classList.add('h-auto', 'py-2'); // Use auto height to fit content
            // Animate hamburger icon to 'X'
            line1.classList.add('rotate-45', 'translate-y-1.5');
            line2.classList.add('opacity-0');
            line3.classList.add('-rotate-45', '-translate-y-1.5');
        }
    });

    // --- Smooth Scrolling for all anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Close mobile menu if a link is clicked
            if (mobileMenu.classList.contains('h-auto')) {
                mobileMenuButton.click();
            }
        });
    });

    // --- Dynamic Navbar on Scroll ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Scrolled down
            navbar.classList.add('bg-gray-900/90');
            navbar.classList.remove('bg-gray-900/70');
        } else {
            // At the top
            navbar.classList.add('bg-gray-900/70');
            navbar.classList.remove('bg-gray-900/90');
        }
    });
});