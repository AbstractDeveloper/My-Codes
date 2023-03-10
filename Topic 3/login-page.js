const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "I10" && password === "abc") {
        alert("You have successfully logged in.");
        location.reload();
        location.href = '/i10.html'
    }

    else if (username === "Innova Crysta" && password === "xyz") {
        alert("You have successfully log in.");
        location.reload();
        location.href = '/InnovaCrysta.html'
    }

    else {
        alert("Entered Username and/or password is incorrect")
    }
})