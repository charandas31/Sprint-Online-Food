function SignUp() {
    window.location.href = "./signUp.html"
}
function LogIn() {
    window.location.href = "./logIn.html"
}
function Menu() {
    window.location.href = "./menu.html"
}

function log_in() {

    let userD = JSON.parse(localStorage.getItem('userDetailsF'))
   
    let username = document.getElementById('username').value
    let pass = document.getElementById('pass').value

    userD.forEach(function (el) {
        
        if (username === el.email && pass === el.password) {
            alert("Successfully Login");
            window.location.href = "./menu.html";
           

        } else {
            alert("Invalid Credential");
        }
    })

}