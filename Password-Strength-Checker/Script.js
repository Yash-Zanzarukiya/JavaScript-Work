let button = document.querySelector('#check-button');
let message = document.querySelector('.message');
let password='',
    strength=0,
    upper=false,
    lower=false,
    special=false,
    number=false,
    minlength=false;

let checkPassword = function () {
    
    password = document.querySelector('#password').value;

    minlength = password.length >= 8
    lower = (password.match(/[a-z]/g) || []).length > 0
    upper = (password.match(/[A-Z]/g) || []).length > 0
    number = (password.match(/[0-9]/g) || []).length > 0
    special = (password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/) || []).length > 0
    
    strength = minlength + lower + upper + special + number;

    if(password.length==0)
        message.innerHTML="Please Enter the Password!!!"
    else if(password.length<4)
        message.innerHTML="Password Must have Minimum 4 Characters"
    else if(password.length>16)
        message.innerHTML="Maximum 16 Characters allowed"
    else if(strength == 5){
        message.innerHTML = 'Strong Password';
    }
    else if(strength >= 3){
        message.innerHTML = 'Medium Password';
    }
    else if(strength <= 3){
        message.innerHTML = 'Weak Password';
    }
}

window.addEventListener('keydown',function(eventObj){
    message.innerHTML=""
    if(eventObj.key == 'Enter')
        checkPassword();
})

button.addEventListener('click',checkPassword)