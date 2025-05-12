import { Menu } from "./components/Menu.js"

window.addEventListener('DOMContentLoaded', () => {
    
    const MainMenu = new Menu();
    
    MainMenu.init();

});


let btnMenu = document.querySelector('.header_btn_Menu'),
    mainMenu = document.getElementById('main-menu'),
    btnCloseMenu = document.querySelector('.close-mainMenu');

// Si le bouton et le menu existent, alors...
if (btnMenu && mainMenu) {
    // Si on a cliqué sur l'icône "Menu"
    btnMenu.addEventListener('click', function() {
        mainMenu.classList.add ('visible');
    });
}

if (btnCloseMenu && mainMenu) {
    btnCloseMenu.addEventListener('click', function() {
        mainMenu.classList.remove ('visible');
    });
}