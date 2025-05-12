const passwordBox = document.getElementById("password");
const length = 16;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    const length = document.getElementById("length").value;
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(password.length < length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    passwordBox.setSelectionRange(0, 9999);
    document.execCommand("copy");
    alert("Password copied!");
}

function checkPasswordStrength(password) {
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;

    const strengthText = document.getElementById('strength-text');
    const strengthBar = document.getElementById('strength-bar');
    
    switch (strength) {
        case 0:
        case 1:
            strengthText.innerText = 'Weak';
            strengthBar.style.backgroundColor = '#e74c3c'; 
            break;
        case 2:
            strengthText.innerText = 'Medium';
            strengthBar.style.backgroundColor = '#f39c12'; 
            break;
        case 3:
            strengthText.innerText = 'Strong';
            strengthBar.style.backgroundColor = '#2ecc71'; 
            break;
        default:
            strengthText.innerText = 'Very Strong';
            strengthBar.style.backgroundColor = '#2ecc71'; 
            break;
    }
    strengthBar.style.width = `${(strength / 4) * 100}%`;
}

function createPassword(){
    const length = document.getElementById("length").value;
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(password.length < length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
    
    checkPasswordStrength(password);
}
