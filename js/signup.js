var regButton = document.querySelector("#regButton");
var regName = document.querySelector("#regName");
var regEmail = document.querySelector("#regEmail");
var regPassword = document.querySelector("#regPassword");
var coordinatesContainer;
var cantSignup = document.getElementById("cantSignup");
var wrongPassword = document.getElementById("wrongPassword");

if (localStorage.getItem("coordinatesList") == null) {
    coordinatesContainer = [];
}
else{
    coordinatesContainer = JSON.parse(localStorage.getItem("coordinatesList"));
}

regButton.addEventListener("click", register);
function register() {
    if (validateEmail() && validateName() && validatePassword()) {
        var coordinates = {
            name: regName.value,
            email: regEmail.value,
            password: regPassword.value
        }
        coordinatesContainer.push(coordinates);
        localStorage.setItem("coordinatesList", JSON.stringify(coordinatesContainer));
        document.location.href = "index.html";
    }
    else {
        regEmail.classList.add("is-invalid");
    }

}

regEmail.addEventListener("focusout",validateEmail);
function validateEmail() {
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(regEmail.value)) {
        regEmail.classList.add("is-valid");
        regEmail.classList.remove("is-invalid");
        return true;
    }
    else {
        regEmail.classList.add("is-invalid");
        return false;
    }
}

regName.addEventListener("focusout",validateName);
function validateName(){
    var regex = /^[a-zA-z]{2,15}[0-9]*$/;
    if(regex.test(regName.value)){
        regName.classList.add("is-valid");
        regName.classList.remove("is-invalid");
        return true;
    }
    else{
        regName.classList.add("is-invalid");
        return false;
    }
}

regPassword.addEventListener("focusout",validatePassword);
function validatePassword(){
    var regex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/;
    if(regex.test(regPassword.value)){
        regPassword.classList.add("is-valid");
        regPassword.classList.remove("is-invalid");
        wrongPassword.style.display = "none";
        return true;
    }
    else{
        regPassword.classList.add("is-invalid");
        wrongPassword.style.display = "block";
        return false;
    }
}