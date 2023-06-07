
/*
const day = 2

// Sostitusce parecchi if/else // 
switch (day) {
    case 1:
        console.log('lunedi');
        break;
    case 2:
        console.log('martedi');
        break;

    default:
        console.log('altro giorno');
        break;
}

const shoppingcart = [
    { product: 'pasta', price: 1.5 },
    { product: 'pomodoro', price: 2.0 },
    { product: 'banana', price: 1.0 },
]

let total = 0

for (let i = 0; i < shoppingcart.length; i++) {
    const item = shoppingcart[i];

    switch (item.product) {
        case 'pasta':
            total += item.price * 0.9
            break;
        case 'pomodoro':
            total += item.price * 1.1
            break;

        case 'banana':
            total += item.price * 0.8

            break;
        default:
            total += item.price
            break;
    }
}
console.log('totale',total); 
*/

// funzione per calcolare quadrato di un numero 
const n = 4 
const n_square = 4 * 4


const x = 10
const x_square = 10 * 10


function pow(num) {
    // istruzioni che la funzione deve eseguire 
    const risultato = num * num
    console.log( risultato);

    return risultato
}


const risultatoPotenza = pow(132)
const risultatoPotenza2 = pow(risultatoPotenza)


pow(5)
pow(7)
pow(9)
pow(15)