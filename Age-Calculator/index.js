
let butt = document.getElementById("btn");

let date = new Date().toISOString().split("T")[0];
let UserAge = document.getElementById("input");
UserAge.max = date;

let age = document.getElementById("age");


butt.addEventListener("click", ()=>{
    let birthDay = new Date(UserAge.value);
    
    let y1 = birthDay.getFullYear();
    let m1 = birthDay.getMonth()+1;
    let d1 = birthDay.getDay();

    let todayDate = new Date();

    let y2 = todayDate.getFullYear();
    let m2 = todayDate.getMonth()+1;
    let d2 = todayDate.getDay();

    let y3 , m3, d3;

    y3=y2-y1;

    if(m2>=m2){
        m3=m2-m1;
    }else{
        y3--;
        m3=12+m2-m1;
    }

    if(d2>=d1){
        d3=d2-d1;
    }else{
        m3--;
        d3 = getDayInMonth(y1, m1) +d2 -d1;
    }

    console.log(y3+m3+d3);
    age.innerHTML=`You are ${y3} year ${m3} Month ${d3} day old, your age is ${y3}`;

    const getDayInMonth =()=>{
        return new Date(year, month, 0).getDate();
    }

    setTimeout(()=>{
        UserAge.value="";
    },100);

}); 
 