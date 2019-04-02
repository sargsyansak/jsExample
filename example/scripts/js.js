// var name = document.getElementById("nameInput");
// var surname = document.getElementById("surnameInput");
// var email = document.getElementById("emailInput");
// var phone = document.getElementById("phoneInput");
// var password = document.getElementById("passwordInput");
// var repeatpassword = document.getElementById("repeatpasswordInput");
// var genderMale = document.getElementById('chekMale')
// var genderFemale = document.getElementById('chekFemale')
//
//
// function resgistrInput() {
//     var reg = document.getElementById('registraciya');
//     if (reg.style.display === "inline") {
//         reg.style.display = "none";
//     } else {
//         reg.style.display = "inline";
//     }
// }
//
// let isUser = false;
//
// function byUser(buttonRegistr) {
//
//     if (buttonRegistr.id === 'name' && buttonRegistr.value() > 0) {
//
//         isUser = true
//
//     } else if (buttonRegistr.id === 'email' && buttonRegistr.value > 0) {
//
//         isUser = true
//
//     } else if (buttonRegistr.id === 'password') {
//
//         for (var i = 0; i < password.length; i++)
//             if (password[i].require && password[i] !== '') {
//                 isUser = false
//                 break;
//             }
//     } else if (buttonRegistr.id === 'repeatpassword') {
//
//         for (var i = 0; i < password.length; i++)
//             if (password[i].require && password[i] !== '') {
//                 isUser = false
//                 break;
//
//             }
//     } else if (buttonRegistr.checked) {
//
//         isUser = true;
//
//     } else if (isUser) {
//
//         isUser.classList.add('true')
//     }
//     display.inline;
//
// }


let form = "" +
    "<div class='form-group row col-sm-10' style='margin-top: 10px'><input id='nameId' type='text' class='form-control' name='name' placeholder='Name' required></div>" +
    "<div class='form-group row col-sm-10'><input   type='text' class='form-control' name='surname' placeholder='Surname'></div>" +
    "<div class='form-group row col-sm-10'><input id='emailId' type='text' class='form-control' name='email' placeholder='Email' required></div>" +
    "<div class='form-group row col-sm-10'><input type='text' class='form-control' name='phone' placeholder='Phone'></div>" +
    "<div class='form-group row col-sm-10'><input id='passwordId' type='text' class='form-control' name='password' placeholder='Password' required></div>" +
    "<div class='form-group row col-sm-10'><input id='repeatPasswordId' type='text' class='form-control' name='repeatpassword' placeholder='RepeatPassword' required></div>" +
    "<div class='form-check'>" +
    "<input id='maleId' class='form-check col-sm-10 form-check-input' type='checkbox'>" +
    "<label class='form-check-label' for='gridCheck1'>Male:</label>" +
    "</div>" +
    "<div class='form-check'>" +
    "<input id='femaleId' class='form-check col-sm-10 form-check-input' type='checkbox'>" +
    "<label class='form-check-label' for='gridCheck1'>Female:</label>" +
    "</div>";

let comment = " <div class='form-group row col-sm-10' style='margin-left: 355px'><input id='descriptionId' class='form-control'  type='text' placeholder='Description'></div>" +
    "<div class='form-group row col-sm-10' style='margin-left: 355px'><input id='cardId' class='form-control' type='password' placeholder='Card Number'></div>";

let view = document.getElementById('view');

// let li = document.getElementsByTagName('li');

function buttonsArray(event) {

    if (event.id === "registr") {
        event.classList.add('active');
        view.innerHTML = form;
    }

}

let isUser = false;
let valueName;
let mail;

function comments(eve) {
    let item = document.getElementsByTagName('input');
    console.log(item[0]);

    for (var i = 0; i < item.length; i++) {

        if (item[i].id === 'nameId' && item[i].value !== '') {
            isUser = true
            valueName = item[i].value
        } else {
            isUser = false
        }
        if (item[i].id === 'emailId' && item[i].value !== '') {
            isUser = true
            mail = item[i].value
        } else {
            isUser = false
        }
        if (item[i].id === 'passwordId' && item[i].value !== '') {
            isUser = true
        } else {
            isUser = false
        }
        if (item[i].id === 'repeatPasswordId' && item[i].value !== '') {
            isUser = true
        } else {
            isUser = false
        }
        if (item[i].id === 'maleId' && item[i].checked) {
            isUser = true
        } else {
            isUser = false
        }
        if (item[i].id === 'femaleId' && item[i].checked) {
            isUser = true
        } else {
            isUser = false
        }
    }
    if (isUser) {
        view.innerHTML = comment
    } else {
        view.innerHTML = form
    }
}


function messages(messag) {
    let items = messag.getElementsByTagName('input')
    for (var i = 0; i < items.length; i++) {
        if (items[i].id === 'descriptionId' && items[i].value !== 0) {
            isUser = true;
        } else {
            isUser = false;
        }
        if (items[i].id === 'cardId' && items[i].value !== 0) {
            isUser = true;
        } else {
            isUser = false;
        }
    }
    if (isUser) {
        let listUser = view.innerHTML = '<p>' + 'User name: ' + valueName + "<br>" + 'User email: ' + mail + '</p>'
        listUser = view.classList.add('mess')


    }
}