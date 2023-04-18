const cardNumberInput = document.getElementById('card-number');

cardNumberInput.addEventListener('input', function(e) {
    let cardNumber = e.target.value.replace(/ /g, '');
    cardNumber = cardNumber.replace(/(.{4})/g, '$1 ');

    // Remove space after last number
    if (cardNumber.slice(-1) === ' ') {
        cardNumber = cardNumber.slice(0, -1);
    }

    e.target.value = cardNumber;
});

cardNumberInput.addEventListener('keydown', function(e) {
    if (e.keyCode === 8) { // backspace key
        if (cardNumberInput.selectionStart === 0 && cardNumberInput.selectionEnd === cardNumberInput.value.length) {
            // Remove all numbers if all are selected
            cardNumberInput.value = '';
        } else {
            let cardNumber = cardNumberInput.value.replace(/ /g, '');
            cardNumber = cardNumber.substring(0, cardNumber.length - 1);
            cardNumber = cardNumber.replace(/(.{4})/g, '$1 ');
            cardNumberInput.value = cardNumber;
        }

        e.preventDefault();
    }
});


const cardExpireInput = document.getElementById('card-expire');

cardExpireInput.addEventListener('input', function(e) {
    let cardExpire = e.target.value.replace(/[^0-9]/g, '');

    if (cardExpire.length > 2) {
        cardExpire = cardExpire.substring(0, 2) + '/' + cardExpire.substring(2, 4);
    }

    e.target.value = cardExpire;
});

cardExpireInput.addEventListener('keydown', function(e) {
    if (e.keyCode === 8) { // backspace key
        if (cardExpireInput.selectionStart === 0 && cardExpireInput.selectionEnd === cardExpireInput.value.length) {
            // Remove all numbers if all are selected
            cardExpireInput.value = '';
        } else {
            let cardExpire = cardExpireInput.value.replace(/[^0-9]/g, '');
            cardExpire = cardExpire.substring(0, cardExpire.length - 1);

            if (cardExpire.length > 2) {
                cardExpire = cardExpire.substring(0, 2) + '/' + cardExpire.substring(2, 4);
            }

            cardExpireInput.value = cardExpire;
        }

        e.preventDefault();
    }
});