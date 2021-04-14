// esercizio 1 

const bici = [
    {
        'nome': "pinarello",
        'peso': 6
    },

    {
        'nome': "bianchi",
        'peso': 5
    },

    {
        'nome': "atala",
        'peso': 10
    },

    {
        'nome': "graziella",
        'peso': 12
    }

]

let biciLeggera = bici[0];

for (let i = 0; i < bici.length; i++){
    if (bici[i].peso < biciLeggera.peso){
        biciLeggera = bici[i];
    }
}

let {nome, peso} = biciLeggera;

const toPrint = `
    <ul>
        <li> <h2> Bici leggera </h2></li>

        <li> ${nome}</li>

        <li> ${peso}</li>
    </ul> 
`;

document.getElementById('stampa').innerHTML = toPrint;

// esercizio 2

const squadre = [
    {
        'nome': "Juve",
        'punti_fatti': 0,
        'falli_subiti': 0
    },

    {
        'nome': "Roma",
        'punti_fatti': 0,
        'falli_subiti': 0
    },

    {
        'nome': "Lazio",
        'punti_fatti': 0,
        'falli_subiti': 0
    },

    {
        'nome': "Fiorentina",
        'punti_fatti': 0,
        'falli_subiti': 0
    }
]

const newSquadre = [];

for ( let i = 0; i < squadre.length; i++){
    squadre[i].punti_fatti = getRndInteger(0, 100);
    squadre[i].falli_subiti = getRndInteger(0, 120);

    let {nome, falli_subiti} = squadre[i];
    newSquadre.push({nome, falli_subiti});
}

console.log(newSquadre);


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }