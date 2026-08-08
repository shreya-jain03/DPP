document.getElementById("registerForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let message = document.getElementById("message");

    if(password !== confirmPassword){
        message.style.color = "red";
        message.innerHTML = "Passwords do not match!";
        return;
    }

    message.style.color = "green";
    message.innerHTML = "Registration Successful!";

    document.getElementById("registerForm").reset();
});