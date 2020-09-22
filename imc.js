
document.getElementById ("blast").addEventListener('click',function(event){
    event.preventDefault();
   

var altura =parseFloat (document.querySelector("#text1").value);
var peso =parseInt (document.querySelector("#text2").value);
var imc = peso/(altura*altura); 

document.querySelector("#display").textContent= imc;
})