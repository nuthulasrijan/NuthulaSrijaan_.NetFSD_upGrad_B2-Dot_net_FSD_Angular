
let btn= document.getElementById("btn")

let obj={
    namee:"Srijaan",
    age:23,
    city:"Adilabad"
}
function displayUserInfo(obj){
    let namePara = document.getElementById("namePara");
    let agePara = document.getElementById("agePara");
    let cityPara = document.getElementById("cityPara")
    namePara.innerHTML = "Name: " + obj.namee;
    agePara.innerHTML = "Age: " + obj.age;
    cityPara.innerHTML = "City: " + obj.city;
}
btn.addEventListener("click",()=>{
     displayUserInfo(obj);

})

