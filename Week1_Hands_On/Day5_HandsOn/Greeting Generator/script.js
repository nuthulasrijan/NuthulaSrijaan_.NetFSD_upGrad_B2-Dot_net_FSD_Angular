let inp= document.getElementById("name");
let btn= document.getElementById("btn");
let p= document.getElementById("para");

function greet(name){
    if(name==""){
        p.innerHTML="Error: Enter Name...";
        p.style.color="red"
    }
    else{
     p.innerHTML= `Hello, ${name} Welcome to our website`;
     p.style.color="green";
    }
}



btn.addEventListener("click",function(){
    let username= inp.value;
    greet(username);
    
})


