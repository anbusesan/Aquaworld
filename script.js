
function toggleMenu() {
    var menu = document.querySelector(".mobile-menu");
    
    if (menu.classList.contains("mobile-menu--open")) {
        menu.style.display = "none";  // Hide when closed
    } else {
        menu.style.display = "block"; // Show when opened
    }
    
    menu.classList.toggle("mobile-menu--open");
}
