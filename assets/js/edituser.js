const namee = document.querySelector(".name")
const fname = document.querySelector(".fname")
const addres = document.querySelector(".addres")
const postcode = document.querySelector(".postcode")
const usernum = document.querySelector(".usernum")
const email = document.querySelector(".email")
const subbtn = document.querySelector(".subbtn")

subbtn.addEventListener("click",(e)=>{
    e.preventDefault()
let userfront = {

    name: namee.value,
    fname: fname.value,
    email: email.value,
    address: addres.value,
    phone: Number(usernum.value),
    postcode: postcode.value

}
// if (condition) {
    if( postcode.value.length == 10){
        fetch('http://localhost:4000/v1/auth/register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userfront)
        })
        .then(res => res.json())
        .then(res1 =>{
            console.log(res1);
            if (res1.status == 201) {
                alert("ثبت نام انجام شد")
                localStorage.setItem("_id",res1._id)
            } else{
                alert("مشکلی در ثبت نام وجود داشت")
            }
        })
        .catch(err => console.log(err))
    }
})
