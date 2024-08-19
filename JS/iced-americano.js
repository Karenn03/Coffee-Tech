const sizeButtons = document.querySelectorAll('.size-btn');

const priceValue = document.querySelector('#price-value');

sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        
        sizeButtons.forEach(btn => btn.classList.remove('active'));

        button.classList.add('active');

        if (button.textContent === 'S') {
            priceValue.textContent = '5000COP';
        } else if (button.textContent === 'M') {
            priceValue.textContent = '6000COP';
        } else if (button.textContent === 'L') {
            priceValue.textContent = '7000COP';
        }
    });
});