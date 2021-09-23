var email;
if(localStorage.getItem("accountEmail") != null){
    email = localStorage.getItem("accountEmail");
    console.log("User has already logged in before")
}

function login(){
    localStorage.setItem("accountEmail", document.getElementById("email").value);
    alert("Login successful.");
}