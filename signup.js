const container = document.querySelector('.password')
const password = document.querySelector('#password');
const confirm_password = document.querySelector('#confirm_password');
const button = document.querySelector('#create_account_button');
const password_error = document.createElement('div');

const show_error = (e) => {
    if(password.value !== confirm_password.value){
        e.preventDefault();
        password_error.classList = 'password_error';
        password_error.textContent = 'Password does not match';
        container.appendChild(password_error);
        password.setAttribute('style','border-color: red;');
        confirm_password.setAttribute('style','border-color: red;');
    } else {
        if(password_error !== null){
            container.removeChild(password_error);
            password.removeAttribute('style');
            confirm_password.removeAttribute('style');
        }
    }
}



button.addEventListener('click', (e) => show_error(e));
password.addEventListener('change', (e) => show_error(e));
confirm_password.addEventListener('change', (e) => show_error(e));