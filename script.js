let submit = document.getElementById('submit');
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let tel = document.getElementById('tel');
let pw = document.getElementById('pw');
let pwConfirm = document.getElementById('pwConfirm');

submit.addEventListener('click', (e) => {
    let required = document.querySelectorAll('.message');
    required.forEach(message => {
        message.classList.remove('message');
        message.textContent = '';
    });

    if (firstName.validity.valueMissing) {
        e.preventDefault();
        let fnReq = document.getElementById('fnReq');
        fnReq.classList.add('message');
        fnReq.textContent = '* Required';

    }
    if (lastName.validity.valueMissing) {
        e.preventDefault();
        let lnReq = document.getElementById('lnReq');
        lnReq.classList.add('message');
        lnReq.textContent = '* Required';
    }
    if (email.validity.valueMissing) {
        e.preventDefault();
        let emailReq = document.getElementById('emailReq');
        emailReq.classList.add('message');
        emailReq.textContent = '* Required'
    }
    if (tel.validity.valueMissing) {
        e.preventDefault();
        let telReq = document.getElementById('telReq');
        telReq.classList.add('message');
        telReq.textContent = '* Required'
    }
    if (pw.validity.valueMissing && pwConfirm.validity.valueMissing) {
        e.preventDefault();
        let pwReq = document.getElementById('pwReq');
        pwReq.classList.add('message');
        pwReq.textContent = '* Required'
    }

    let submitError = document.getElementById('submitError');
    submitError.classList.add('message');
    submitError.textContent = '* Items require attention'
})

let checkEmail = function() {
    let emailError = document.getElementById('emailError');

    if (email.validity.typeMismatch) {
        emailError.classList.add('message');
        emailError.textContent = "Invalid email address"
    } else {
        emailError.classList.remove('message');
        emailError.textContent = '';
    }
}

let checkTel = function() {
    let telError = document.getElementById('telError');

    if (tel.validity.patternMismatch) {
        telError.classList.add('message');
        telError.textContent = 'Invalid phone number'
    } else {
        telError.classList.remove('message');
        telError.textContent = ''
    }
}

let checkPassword = function() {
    let pwMatch = document.getElementById('pwMatch');
  
    if (pw.value !== pwConfirm.value) {
        pw.classList.add('error');
        pwConfirm.classList.add('error');
        pwMatch.classList.add('message');
        pwMatch.textContent = '* Passwords do not match';
    } else if (pw.value == pwConfirm.value) {
        pw.classList.remove('error');
        pwConfirm.classList.remove('error');
        pwMatch.classList.remove('message');
        pwMatch.textContent = '';
    }
}