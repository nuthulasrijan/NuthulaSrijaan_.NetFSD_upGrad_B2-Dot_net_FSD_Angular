let countval = 0;
let incbtn= document.getElementById("incrBtn");
let resBtn= document.getElementById("resetBtn")
function incrementCounter(step){
    countval++;
    let counter1=document.getElementById("counter");
    counter1.innerHTML=countval;
}

incbtn.addEventListener("click",function(){
incrementCounter(1)
})
resBtn.addEventListener("click",function(){
    let counter2=document.getElementById("counter");
    counter2.innerHTML="0";

})


