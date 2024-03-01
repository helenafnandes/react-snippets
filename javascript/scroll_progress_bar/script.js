// scroll progress bar

const backgroundBarEl = document.querySelector("#bar-background");
const progressBarEl = document.querySelector("#bar-progress");
const listEl = document.querySelector(".container");

document.addEventListener('scroll', () => {
    console.log(backgroundBarEl.style.maxWidth)
    const scrollPercent = document.documentElement.scrollTop / (document.documentElement.scrollHeight - window.innerHeight) * 100;

    progressBarEl.style.width = scrollPercent + "%";

    if(scrollPercent >= 100) {
        console.log("irrul")
        listEl.classList.add('page-end');
    } else{
        listEl.classList.remove('page-end');
    }
})



// populate the cat names list

const catNames = [
    "Bolinha", "Frajola", "Bidu", "Bibi", "Branquinho", "Fofinho", "Frajola", "Xuxu", "Pipoca", "Pretinho",
    "Felix", "Mel", "Pituco", "Sombra", "Marrom", "Nina", "Luna", "Tico", "Teca", "Tobias",
    "Tom", "Zé", "Pingo", "Gatinho", "Garfield", "Mingau", "Marie", "Bola de Neve", "Mimi", "Ziggy",
    "Miau", "Preta", "Mia", "Pandora", "Gato", "Gata", "Amora", "Neném", "Júnior", "Mariana",
    "Estrelinha", "Snow", "Neve", "Nevada", "Thor", "Fred", "Bebê", "Bebezinho", "Manchinha", "Lua",
    "Nico", "Nicolau", "Nick", "Princesa", "Bebel", "Pitoco", "Anjo", "Lolita", "Miauzinho", "Aurora",
    "Mimi", "Fumaça", "Whiskas", "Whisky", "Whiskinho", "Branquinha", "Frajolinha", "Branco", "Jasmim", "Dudu",
    "Duda", "Bolinha", "Nanico", "Tigrão", "Tigrinho", "Docinho", "Pérola", "Zézinho", "Marmaduke", "Frida",
    "Gugu", "Chiquinho", "Nala", "Príncipe", "Princesinha", "Romeu", "Julieta", "Pretinha", "Tico-Tico", "Sissi",
    "Milo", "Milu", "Pirata", "Tuca", "Fubá", "Nico", "Nicolau", "Tutu", "Cacau", "Naná"
];
const catList = document.getElementById('cat-list');

catNames.forEach(catName => {
    const li = document.createElement('li');
    li.textContent = catName;
    catList.appendChild(li);
});