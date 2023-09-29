// Step-01
document.getElementById('btn-submit').addEventListener('click', function () {
    // Step-2: email site
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3: password site
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // step-4:verify email & password
    if(email === 'sontan@baap.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        console.log('invalid user');
    }


})