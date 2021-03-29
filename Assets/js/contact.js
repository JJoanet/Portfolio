var formbutton = document.querySelector("#submit")
var formname = document.querySelector("#name")
var formemail = document.querySelector("#email")
var formphone = document.querySelector("#phone_number")
var formmessage = document.querySelector("#message")
formbutton.addEventListener("click", function (e){
        e.preventDefault()
        console.log({name:formname.value, email:formemail.value, phone_number:formphone.value, message:formmessage.value})
})