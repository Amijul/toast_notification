

const passBox = document.getElementById("pass");
const lenth = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$&";
const allValue = upperCase + lowerCase + number + symbol ;

const createPassword = ()=>{
   let password ="";

   password +=upperCase[Math.floor(Math.random()*upperCase.length)];
   password +=lowerCase[Math.floor(Math.random()*lowerCase.length)];
   password +=number[Math.floor(Math.random()*number.length)];
   password +=symbol[Math.floor(Math.random()*symbol.length)];
  
   while(lenth >password.length){
      password +=allValue[Math.floor(Math.random()*allValue.length)];   
   }

   passBox.value = password;
};

 const copyPass = ()=>{
    passBox.select();
    document.execCommand("copy");
 };
