var loginEmail = document.querySelector("#loginEmail");
var loginPassword = document.querySelector("#loginPassword");
var loginButton = document.querySelector("#loginButton");
var coordinatesContainer = JSON.parse(localStorage.getItem("coordinatesList")); 
var cuurentIndex = 0;
var cantLogin = document.getElementById("cantLogin");
loginButton.addEventListener("click",login);

function login(){
    for(var i =0 ; i < coordinatesContainer.length ; i++){
        if(loginEmail.value == coordinatesContainer[i].email  && loginPassword.value == coordinatesContainer[i].password){
            cuurentIndex = i;
            localStorage.setItem("cuurentIndex",JSON.stringify(cuurentIndex));
            document.location.href="home.html";
            
            cantLogin.style.display = "none";
        }
        else{
            cantLogin.style.display = "block";
        }
    }
}


