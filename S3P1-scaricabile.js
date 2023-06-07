/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare 
 la loro somma moltiplicata per 3.
*/


function crazySum(num1, num2) {
   
    if (num1 === num2) {
        return (num1 + num2) * 3
    } else { 
       return num1 + num2 
        
    }
    
}

console.log(crazySum(2,3)); 

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è 
 incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

 function boundary(num) {
    
   num >= 20 && num <= 100 || num === 400 ? console.log(true) : console.log(false)
}

boundary(14) 



/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/
 

function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
  } 
   
 console.log(reverseString('EPICODE')); 

function Reverse(str) {
    var newString = ""
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i];
        
    }

    return newString
    
    }


   console.log(Reverse("hello")
   ); 

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function UpperFirst(str) 
    
    {
        return str[0].toUpperCase() + str.slice(1);
    }

console.log(UpperFirst("epicode")); 

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom(n) {
    return Math.floor(Math.random() * n)

}
 console.log("random number",giveMeRandom(11));



//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2 ) {
    return l1 * l2
}

console.log("area", area(10, 8)); 

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

const crazyDiff = function (num) {
    totale = Math.abs(num - 19)
    if (totale > 19) {
      return  totale * 3
    } else {
      return Math.abs(num - 19)
    }
  }
 
  console.log(crazyDiff(39))

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

const codify = function (str) {
   

   return str.startsWith('code') ? str  :  str + ' code' 
    
  }
 
  console.log(codify('code'));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

const check3and7 = function (n) {
    if (n >= 0 && (n % 3 === 0 || n % 7 === 0)) {
     
      return true
    } else {
      return false
    }
  }
  
  console.log(check3and7(20))

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/


const cutString = function (str) {
    return str.slice(1, str.length - 1) 
  }
  console.log(cutString('EPICODE'))
