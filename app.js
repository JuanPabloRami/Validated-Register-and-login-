// se capturan los inputs de la plantilla html
const inputName = document.getElementById("InputName");
const inputUsername = document.getElementById("InputUsername");
const inputEmail = document.getElementById("InputEmail");
const inputPw = document.getElementById("InputPw");
const inputPwConfirm = document.getElementById("InputPwConfirm");
const nameErrorOutput = document.getElementById("NameErrorOutput");
const buttonMessage = document.getElementById("ButtonMessage");



//los eventos que ejecutan las funciones
inputName.addEventListener("keyup",ValidateName);
inputEmail.addEventListener("keyup",ValidateEmail);
inputUsername.addEventListener("keyup",ValidateUserName);
inputPw.addEventListener("keyup",ValidatePassword);
inputPwConfirm.addEventListener("keyup",ValidateConfirmPassword);
buttonMessage.addEventListener("click",saveAccount);




// ES: objeto el cual incluye todas las expresiones regulares para validar los campos.
// EN: object which includes all the regexp to validate the fields :)
const RegularExpressions = {
    name:/^[a-z ,.'-]+$/i,
    username:/^[a-zA-Z0-9\_\-]{4,16}$/,
    email:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password:/^.{4,12}$/,
}

//objeto con las variables booleanas para validar los campos ingresados.
let validateFields = {
    name: false,
    email: false,
    username: false,
    pw: false,
    pwConfirm: false
}

// los inputs del usuario convertidos a valor (value)
const nameValue = inputName.value;
const emailValue = inputEmail.value;
const usernameValue = inputUsername.value;
const pwValue = inputPw.value;
const pwConfirmValue = inputPwConfirm.value;


// funciones que validan en tiempo real los campos ingresados por el usuario

function ValidateName(name){
    const nameValue = inputName.value;
    if(RegularExpressions.name.test(nameValue)){
        console.log("valid Name");
        validateFields.name = true;
        return true;
    }
    else{
        console.log("invalid Name");
        validateFields.name = false;
        return false;
    }
    
}

function ValidateEmail(mail) {
    const emailValue = inputEmail.value;
    if (RegularExpressions.email.test(emailValue)){
        console.log("valid Email")
        validateFields.email = true;
        return true;
    }
    else{
        console.log("Invalid Email");
        validateFields.email = false;
        return false;
    }
}

function ValidateUserName(username){
    const usernameValue = inputUsername.value;
    if (RegularExpressions.username.test(usernameValue)){
        console.log("valid username")
        validateFields.username = true;
        return true;
    }
    else{
        console.log("Invalid username");
        validateFields.username = false;
        return false;
    }
}

function ValidatePassword(pw){
    const pwValue = inputPw.value;
    if (RegularExpressions.password.test(pwValue)){
        console.log("valid password");
        validateFields.pw = true;
        return true;
    }
    else{
        console.log("Invalid password");
        validateFields.pw = false;
        return false;
    }
}

function ValidateConfirmPassword(pwConfirmed){
    const pwValue = inputPw.value;
    const pwConfirmValue = inputPwConfirm.value;
    if (pwValue === pwConfirmValue){
        console.log("password coincide");
        validateFields.pwConfirm = true;
        return true;
    }
    else{
        console.log("password doesn't coincide");
        validateFields.pwConfirm = false;
        return false;
    }
}

// el objeto donde se guardaran los datos de los usuarios.
let users = {};


// funcion que se encargará de guardar los datos de los usuarios dentro del objeto users
function saveAccount(){

    // se ejecutan las funciones de las validaciones
    ValidateName(inputName);
    ValidateEmail(inputEmail);
    ValidateUserName(inputUsername);
    ValidatePassword(inputPw);
    ValidateConfirmPassword(inputPwConfirm);


    // se valida con el objeto "validateFields" si todos los campos fueron validos (true) y de ser asi se guardan los datos dentro del objeto.
    if(validateFields.email === true &  validateFields.name === true & validateFields.username === true & validateFields.pw === true & validateFields.pwConfirm === true){
        users[emailValue] = {};
        users[emailValue]["name"] = nameValue;
        users[emailValue]["username"] = nameValue;
        users[emailValue]["password"] = nameValue;
    }
    else{
        console.log("ñao ñao, hay un campo mal llenado");
    }
    
    console.log(users);
}


