const inputBodies = document.querySelectorAll('.input__body');

inputBodies.forEach(inputBody => {
    const decreaseBtn = inputBody.querySelector('#decrease');
    const increaseBtn = inputBody.querySelector('#increase');
    const countInput = inputBody.querySelector('.input__count');

    decreaseBtn.addEventListener('click', () => {
        let currentValue = parseInt(countInput.value);
        if (currentValue > 1) {
            currentValue--;
            countInput.value = currentValue;
        }
    });

    increaseBtn.addEventListener('click', () => {
        let currentValue = parseInt(countInput.value);
        if (currentValue < 99) {
            currentValue++;
            countInput.value = currentValue;
        }
    });
});