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
}
// iphone
document.getElementById('iphone-plus').addEventListener('click', function () {
    increaseAndDecrease('iphone', 1299, true);
})

document.getElementById('iphone-minus').addEventListener('click', function () {
    increaseAndDecrease('iphone', 1299, false);
})
// iphone case
document.getElementById('case-plus').addEventListener('click', function () {
    increaseAndDecrease('case', 59, true);
})

document.getElementById('case-minus').addEventListener('click', function () {
    increaseAndDecrease('case', 59, false);
})