let authForm = document.querySelector('.auth-form')
let signIn = document.querySelector('.sign-in')
let signUp = document.querySelector('.sign-up')

signIn.addEventListener('click' , () => {
    authForm.classList.remove('signInEnter')
})

signUp.addEventListener('click' , () => {
    authForm.classList.add('signInEnter')
})

const usernuminpt = document.querySelector(".usernum_inpt")
const regbtn = document.querySelectorAll(".reg_btn")
// localStorage.removeItem("num")

regbtn.forEach(btn => {
    btn.addEventListener("click",sendcodeH)
})

function sendcodeH(){
    if (usernuminpt.value.length == 11 || usernuminpt.value.length == 10) {
        fetch("http://localhost:4000/v1/auth/send-opt-code/"+Number(usernuminpt.value))
        .then(res => res.json)
        .then(resp => console.log(resp))
        .then(gocheckcodep())
    } else{
        alert("لطفا شماره موبایل خود را به درستی وارد نمایید")
        location.reload()
        regbtn.forEach(btn => {
            btn.setAttribute("href" , "#")
        })
        
    }
}
function gocheckcodep(){
    regbtn.forEach(btn => {
        btn.setAttribute("href" , "sending-code.html?num="+Number(usernuminpt.value))
    })    
}
