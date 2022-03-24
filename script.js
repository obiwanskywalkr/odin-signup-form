let checkPassword = function() {
    let pw = document.getElementById('pw');
    let pwConfirm = document.getElementById('pwConfirm');
    let message = document.getElementById('message');
  
    if (pw.value !== pwConfirm.value) {
        pw.classList.add('error');
        pwConfirm.classList.add('error');
        message.classList.add('message');
        message.textContent = '* Passwords do not match';
    } else if (pw.value == pwConfirm.value) {
        pw.classList.remove('error');
        pwConfirm.classList.remove('error');
        message.classList.remove('message');
        message.textContent = '';
    }
}