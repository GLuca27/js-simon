
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
}, timer * 1000);


