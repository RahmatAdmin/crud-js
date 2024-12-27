let username = document.getElementById('name');
let password = document.getElementById('password');
let message = document.getElementById('error');
let error = document.createElement('p');

const verification = () => {
    if (username.value === 'admin' && password.value === 'admin123') {
        window.location.href = 'dashboard.html';
    } else {
        error.innerHTML = 'Username atau password salah!';
        message.innerHTML = ''; 
        message.appendChild(error);
    }
};

const login = (event) => {
    event.preventDefault();
    verification();
};
