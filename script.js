const buttons = document.querySelectorAll('.btn');
const resultInput = document.getElementById('result');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '=') {
            try {
                resultInput.value = eval(resultInput.value);
            } catch (error) {
                resultInput.value = 'Error';
            }
        } else if (button.textContent === 'C') {
            resultInput.value = '';
        } else {
            resultInput.value += button.textContent;
        }
    });
});
