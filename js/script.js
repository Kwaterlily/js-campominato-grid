// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, 
// in cui ogni cella contiene un numero tra quelli compresi in un range:

// con difficoltà 1 => tra 1 e 100
const grigliaCampoMinato = document.getElementById('griglia');

const elementi = () => {
    const node = document.createElement('div')
    node.className = 'square';
    return node;
}

const tasto = document.getElementById('griglia');

for (let i = 1; i < 100; i++){
    const divElement = elementi();

    divElement.addEventListener('click',

    function(){
        console.log(this);
        this.classList.add("clicked");
    }
    )
    grigliaCampoMinato.append(divElement);
}



// con difficoltà 2 => tra 1 e 81
const grigliaCampoMinato = document.getElementById('griglia');

const elementi = () => {
    const node = document.createElement('div')
    node.className = 'square';
    return node;
}

const tasto = document.getElementById('griglia');

for (let i = 1; i < 81; i++){
    const divElement = elementi();

    divElement.addEventListener('click',

    function(){
        console.log(this);
        this.classList.add("clicked");
    }
    )
    grigliaCampoMinato.append(divElement);
}

// con difficoltà 3 => tra 1 e 49
const grigliaCampoMinato = document.getElementById('griglia');

const elementi = () => {
    const node = document.createElement('div')
    node.className = 'square';
    return node;
}

const tasto = document.getElementById('griglia');

for (let i = 1; i < 49; i++){
    const divElement = elementi();

    divElement.addEventListener('click',

    function(){
        console.log(this);
        this.classList.add("clicked");
    }
    )
    grigliaCampoMinato.append(divElement);
}