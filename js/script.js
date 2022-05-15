// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, 
// in cui ogni cella contiene un numero tra quelli compresi in un range:

// con difficoltà 1 => tra 1 e 100
const livelloFacile = document.getElementById("primoLivello");
livelloFacile.addEventListener("click",() => creagriglia(100, "size-uno"));

// con difficoltà 2 => tra 1 e 81
const livelloIntermedio = document.getElementById("secondoLivello");
livelloIntermedio.addEventListener("click",() => creagriglia(81, "size-due"));

// con difficoltà 3 => tra 1 e 49
const livelloDifficile = document.getElementById("terzoLivello");
livelloDifficile.addEventListener("click",() => creagriglia(49, "size-tre"));


function creagriglia(size, position){

    const grigliaEl = document.getElementById("griglia");
    grigliaEl.innerHTML = ''; 
    grigliaEl.className = position ;
    for (let i = 0; i < size; i++){

    const divEl = document.createElement("div");
    divEl.className = "square";

    divEl.addEventListener("click", () => divEl.style.backgroundColor = "rgb(126, 194, 231)");
    
    grigliaEl.append(divEl);
    
    }
    
}

