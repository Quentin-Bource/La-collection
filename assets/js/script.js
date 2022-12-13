import { collection } from "./config";

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


function carte(collect) {
    let article = document.createElement("article");

    let picture = document.createElement("img");
    picture.setAttribute("alt", collect.name)
    picture.setAttribute("src", collect.img)
    article.appendChild(picture);
    
    return article;

}
