import { links } from "../data/menu";

export class Menu {

    constructor() {
        this.menuContainer = document.querySelector("#menu-js")
    }

    init() {

        let menuTemplate = `<ul>`;

        links.forEach((link) =>  {
            menuTemplate += `<li><a href="" icone="" title="">${link.title}</a></li>` 
        });
        
         menuTemplate += `</ul>`;
        
         this.render(menuTemplate);
    }

    render(content) {
        this.menuContainer.innerHTML = content;
    }
}