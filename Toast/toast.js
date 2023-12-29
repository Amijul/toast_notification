
var line = document.querySelector("#anime");
var success_sms = document.getElementById("span2");



const displaySuccess =()=>{
  var target1 =  document.querySelector(".popup");
  target1.style.display="block";
  target1.style.color="green";

  success_sms.innerHTML="Submit Success!!";
  line.style.backgroundColor ="green";

    setTimeout(()=>{
        target1.style.display="none";  
    },3000)
};


const displayDanger =()=>{
    target1 =  document.querySelector(".popup");
    target1.style.display="block";
    target1.style.color="red";

    success_sms.innerHTML="Error wrong!!";
    line.style.backgroundColor ="red";
      setTimeout(()=>{
          target1.style.display="none";  
      },3000)
};


const displayWarning =()=>{
     target1 =  document.querySelector(".popup");
    target1.style.display="block";
    success_sms.innerHTML="Warning Somthing wrong!!";
    target1.style.color ="#9DC209";
    line.style.backgroundColor ="yellow";
      setTimeout(()=>{
          target1.style.display="none";  
      },6000)};

const Remove =()=>{
    target1.style.display="none";  
};