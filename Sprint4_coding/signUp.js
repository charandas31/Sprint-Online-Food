function SignUp() {
    window.location.href = "./signUp.html"
}
function LogIn() {
    window.location.href = "./logIn.html"
}
function Menu() {
    window.location.href = "./menu.html"
}

function submit() {
    let userArray;
    userArray = JSON.parse(localStorage.getItem('userDetailsF'));

    let name = document.getElementById("name").value
    let contact = document.getElementById('contact').value
    let email = document.getElementById('email').value
    let password = document.getElementById("password").value

    let userDetails = {
        name,
        contact,
        email,
        password
    }
    
    if (userDetails.name == "" || userDetails.contact == "" || userDetails.email == "" || userDetails.password == "") {
        alert("Please fill all the details");
        return false;
    }
    

    if (userArray == null) {
        userArray = [];
    } else {
        userArray = JSON.parse(localStorage.getItem('userDetailsF'));
    }
 
    
    let bool = false;
    for (let i = 0; i < userArray.length; i++) {
        if (userArray[i].email === email) {
            alert('User data is already present in our local storage');
            bool = true;
            break;
        }
    }
    
    if (!bool) {
        userArray.push(userDetails);
        window.location.href = "./logIn.html"
    }

    localStorage.setItem("userDetailsF", JSON.stringify(userArray));

}