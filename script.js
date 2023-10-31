const inputPassword = document.querySelector("#pwd")
const inputConfirmPassword = document.querySelector("#confirm-pwd")

inputPassword.addEventListener('keyup', () => {
    confirmPassword()
    console.log("Checking pwd")
})
inputConfirmPassword.addEventListener('keyup', () => {
    confirmPassword()
    console.log("Checking pwd")
})


function confirmPassword(){
    let textPassword = document.querySelector("#pwd").value
    let textPasswordConfirm = document.querySelector("#confirm-pwd").value


    console.log(textPassword)
    console.log(textPasswordConfirm)

    if (textPassword == textPasswordConfirm){
        console.log("Passwords match")
        inputPassword.setAttribute('style', 'color: white; background: green')
        inputConfirmPassword.setAttribute('style', 'color: white; background: green')
    }else{
        console.log("Passwords match")
        inputPassword.removeAttribute('style')
        inputConfirmPassword.removeAttribute('style')
    }
}

