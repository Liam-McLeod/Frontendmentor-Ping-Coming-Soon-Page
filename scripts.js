const form = document.querySelector('form');
const emailInput = document.querySelector('input');


form.addEventListener('submit', e => {
    e.preventDefault();
    var emailValue = emailInput.value.trim();
    var error_message = document.querySelector('.error-message');

    if(!emailValue.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        error_message.innerText = 'Please provide a valid email address';
        emailInput.style.borderColor = 'red';
    }

})