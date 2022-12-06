
function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1) )+ min;
}

const numbers = [];
const numbersElement = document.getElementById('numbers');


while( numbers.length < 5 ){
    const numb = getRndInteger(1, 100)
    if( !numbers.includes(numb)){
        numbers.push(numb);
    }
}

numbersElement.innerHTML = numbers;

setTimeout(function(){
    numbersElement.remove();
}, 3000);

setTimeout(function(){
    

    for(let i = 0; i < 5; i++) {
        const numb = Number(prompt('Inserisci un numero'));
    }

    if ( numb.length > 0 ){
        alert('Hai indovinato  numeri, i numeri indovinati sono: ')
    } else {
        alert('Non hai indovinato nessun numero')
    }
}, 4000);


