// if (localStorage.getItem("nn")) {
    
// }
const mmu = document.getElementById("countdownB")
mmu.addEventListener("click", (e)=>{
    // console.log(e.target.innerHTML == "درخواست کد جدید");
    // if (e.target.innerHTML== "درخواست کد جدید") {
        history.go(-1)
    // }
})

let locationParams = new URLSearchParams(location.search)
let mainProductID = locationParams.get('num')
console.log(mainProductID);


const inpt1 = document.querySelector(".inpt1")
const inpt2 = document.querySelector(".inpt2")
const inpt3 = document.querySelector(".inpt3")
const inpt4 = document.querySelector(".inpt4")
const inpt5 = document.querySelector(".inpt5")
const inpt6 = document.querySelector(".inpt6")

const submit = document.querySelector(".submit")

let valuec = inpt1.value + inpt2.value + inpt3.value + inpt4.value + inpt5.value + inpt6.value

submit.addEventListener("click",()=>{
        fetch(`http://localhost:4000/v1/auth/send-opt-code/${mainProductID}/${inpt1.value + inpt2.value + inpt3.value + inpt4.value + inpt5.value + inpt6.value}`)
        .then(res => res.json())
        .then(resp => router(resp))
    
})
function router(resp){
    console.log(resp);
    
    if (resp) {
        fetch(`http://localhost:4000/v1/auth/me/${Number(mainProductID)}`)
        .then(res => res.json())
        .then(bres => router2(bres))


    } else{
        console.log
        ("کد درست نیست")
    }
}
function router2(bres){
    console.log(bres);
    
    if (bres) {
        console.log("xcgjs\jg");
        
        // قبلا ثبت نام کرده ورود

    } else{
        // localStorage.setItem("nn","true")
        // location.reload()
        submit.setAttribute("href","edit-user-panel.html?num="+mainProductID)

    }
}