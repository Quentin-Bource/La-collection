import { collection } from "./config.js";

//création de la section avec toutes les cartes
function main(){
    let collects = collection;
    let main = document.querySelector("main");
    let section = document.createElement("section")
    section.id = "allcarte"

    for (let elem of collects) {
        section.appendChild(carte(elem))
    }

    main.appendChild(section)

}
main()

//création d'une carte 
function carte(collect) {

    let article = document.createElement("article");

    let picture = document.createElement("img");
    picture.setAttribute("alt", collect.name)
    picture.setAttribute("src", collect.img)
    picture.classList.add('carte__img')

    
    
    document.getElementById('allcarte')
    article.appendChild(picture);
    

}
