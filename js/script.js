const emailInput = document.getElementById('email');
const errorMessage = document.querySelector('.error-message');

emailInput.addEventListener('input', function () {
    const isValidEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput.value);
    if (!isValidEmail) {
        emailInput.classList.add('error');
        errorMessage.classList.add('active');
    } else {
        emailInput.classList.remove('error');
        errorMessage.classList.remove('active');
    }
});