
const btn =document.getElementById("btn");
const input = document.getElementById("input-note");

const notes = document.querySelector(".row2 p");

btn.addEventListener("click", ()=>{
   
    notes.innerHTML=input.value;
    input.value="";
});