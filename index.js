// Your code here

function moveDodgerLeft() {
    let dodger = document.getElementById('dodger');

    var left = dodger.style.left;
    left = parseInt(left);
    var newLeft = left - 5;
    console.log('left', left);
    console.log('newLeft', newLeft);

    dodger.style.left = newLeft + 'px';
}

function moveDodgerRight() {
    let dodger = document.getElementById('dodger');

    var left = dodger.style.left;
    left = parseInt(left);
    var newLeft = left + 5;
    console.log('left', left);
    console.log('newLeft', newLeft);

    dodger.style.left = newLeft + 'px';
}