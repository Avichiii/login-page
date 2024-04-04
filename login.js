// selecting html objects
const checkboxElement = document.getElementById('js-checkbox');
const passwordElement = document.querySelector('.js-password-field');
const imgElement = document.querySelector('.js-image')
const buttonElement = document.querySelector('.js-login');
const toggleElement = document.querySelector('.js-dark-mode');
const mainContainer = document.querySelector('.js-main-container');


// event listener for checkbox
checkboxElement.addEventListener('click', () => {
    const isType =  passwordElement.getAttribute('type');

    if (isType === 'password'){
        passwordElement.setAttribute('type', 'text');
        imgElement.setAttribute('src', 'images/girl-opened-eyes.png')
    } else {
        passwordElement.setAttribute('type', 'password');
        imgElement.setAttribute('src', 'images/girl-closed-eyes.png')
    }
       
})

// alerts on login
buttonElement.addEventListener('click', () => alert('loggin you in!!!'));

// handles toggle background
toggleElement.addEventListener('click', () => {
    if(document.body.style.backgroundColor !== 'white') {
        document.body.style.backgroundColor = 'white';
        mainContainer.style.backgroundColor = 'rgb(239, 243, 244)';
    } else {
        document.body.style.backgroundColor = 'rgb(239, 243, 244)';
        mainContainer.style.backgroundColor = 'white';
    }
});