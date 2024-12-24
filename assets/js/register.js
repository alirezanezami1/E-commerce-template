const usernuminpt = document.querySelector(".usernum_inpt")
const regbtn = document.querySelector(".reg_btn")
// localStorage.removeItem("num")

regbtn.addEventListener("click",sendcodeH)

function sendcodeH(){
    if (usernuminpt.value.length == 11 || usernuminpt.value.length == 10) {
        fetch("http://localhost:4000/v1/auth/send-opt-code/"+Number(usernuminpt.value))
        .then(res => res.json)
        .then(resp => console.log(resp))
        .then(gocheckcodep())
    } else{
        alert(1,"لطفا شماره موبایل خود را به درستی وارد نمایید")
        location.reload()
        regbtn.setAttribute("href" , "#")
        
    }
}
function gocheckcodep(){
    // localStorage.setItem("num",usernuminpt.value)
    regbtn.setAttribute("href" , "sending-code.html?num="+Number(usernuminpt.value))
    // location.href
}
// function sendagaincode(e){
//   console.log(e.target);
  
// }