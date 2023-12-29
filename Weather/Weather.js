
const name = document.querySelector(".input input");
const btn = document.querySelector(".input button");
const imga = document.querySelector("#image");

 const Search = async (name)=>{
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=5d964cba0ef5b1e738ecfa3f8423fbdd`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    document.getElementById("city").innerHTML =data.name;
    document.getElementById("tem").innerHTML = Math.floor(data.main.temp) + " ℃";
    document.getElementById("wind").innerHTML =data.wind.speed +" km/s";
    document.getElementById("humidity").innerHTML ="Humidity " +data.main.humidity;

    if(data.weather[0].main =="Cloud"){
        imga.src="./Cloudy.png";
    }

    
    else if(data.weather[0].main =="Clear"){
        imga.src="./Sunny.png";
    }

    else if(data.weather[0].main =="Rain"){
        imga.src="./rainning.png";
    }
    
};

btn.addEventListener("click", ()=>{
   
    Search(name.value);
    name.value="";
});

