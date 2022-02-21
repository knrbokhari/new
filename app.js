// increase And Decrease input value and prices
function increaseAndDecrease(product, price, isIncreasing) {
    const number = document.getElementById(product + '-num');

    let productPrice = document.getElementById(product + '-price');

    if (isIncreasing == true) {
        if (5 > number.value) {
            const preNum = parseInt(number.value) + 1;
            number.value = preNum;
            productPrice.innerText = parseInt(price * number.value);
        }
    }
    else {
        if (0 < number.value) {
            const preNum = parseInt(number.value) - 1;
            number.value = preNum;
            productPrice.innerText = parseInt(price * number.value);
        }
    }
    totalCost();
}
// cost calculation
function totalCost(){
    // inputs
    const iphoneNum = document.getElementById('iphone-num');
    const caseNum = document.getElementById('case-num');
    // subTotal, tex, total getting from html
    const subTotal = document.getElementById('sub-totol');
    const tax = document.getElementById('tax');
    const total = document.getElementById('total');
    // changing values
    subTotal.innerText = iphoneNum.value * 1299 + caseNum.value * 59;
    tax.innerText = (parseFloat(subTotal.innerText) * 0.05).toFixed(2);
    total.innerText = (parseFloat(subTotal.innerText)+ parseFloat(tax.innerText)).toFixed(2);
}
// iphone plus
document.getElementById('iphone-plus').addEventListener('click', () => increaseAndDecrease('iphone', 1299, true));
// iphone minus
document.getElementById('iphone-minus').addEventListener('click', () => increaseAndDecrease('iphone', 1299, false));
// iphone case plus
document.getElementById('case-plus').addEventListener('click', () => increaseAndDecrease('case', 59, true));
// iphone case minus
document.getElementById('case-minus').addEventListener('click', () => increaseAndDecrease('case', 59, false));