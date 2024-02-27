const incrementFunction = () => {
    var  numberString = document.getElementById("counter-number");
    var number = Number(numberString.textContent);
    numberString.textContent = number+1;
    console.log(`increment logged!`)
}

const decrementFunction = () => {
    var  numberString = document.getElementById("counter-number");
    var number = Number(numberString.textContent);
    numberString.textContent = number-1;
    console.log(`decrement logged!`)
}