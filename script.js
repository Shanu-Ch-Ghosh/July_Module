
const project = document.getElementById('project-heading');
const fetchDataButton = document.getElementById('fetch-data-button');
const mapIframe = document.getElementById('map');
const weatherDataDiv = document.getElementById('weather-data');
const map = document.getElementById('map');
const welcome = document.getElementById('welcome');
const locationPara = document.getElementById('locPara');
const lat = document.getElementById('lat');
const long = document.getElementById('long');
const weatherdata = document.getElementById('weatherdata');
const tempr = document.getElementById('tempr');
const loc = document.getElementById('loc');
const windSpeed = document.getElementById('windSpeed');
const humidityP = document.getElementById('humidityP');
const pressureH = document.getElementById('pressureH');
const feels = document.getElementById('feels');
const mainContainer = document.getElementById('container');








fetchDataButton.addEventListener('click', async function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        weatherDataDiv.innerHTML = "Some Error Occured!";
    }

    
});

    

 async function getData(lat,long){
    return promise = await fetch(
        map.src = `https://maps.google.com/maps?q=${lat}, ${long}&output=embed`
    );
    
}

async function showPosition(position){
                             
   
   await getData(position.coords.latitude,position.coords.longitude);
//    console.log(position.coords.latitude + " " + position.coords.longitude)

   map.style.display = 'block';
   project.style.display = 'none';
  
   fetchDataButton.style.display = 'none';
   mainContainer.style.display = 'block';

   checkWeather(position.coords.latitude,position.coords.longitude);

   lat.innerText = "Lat: " + position.coords.latitude;
   long.innerText = "Long: " + position.coords.longitude;
    
}

async function checkWeather(lat,long){
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${long}&appid=556807a72ff3b187702bfbcd6e0aee0b`);
    let data = await response.json();
    // console.log(data)
    welcome.innerText = "Welcome To The Weather App";
    locationPara.innerText = "Here is Your current location";
    weatherdata.innerText = "Your Weather Data";
    loc.innerText = "Location: " + data.name;
    tempr.innerText = "Tempareture: " + parseInt(data.main.temp) + "°C"
    windSpeed.innerText = "Wind Speed: " + Math.round(data.wind.speed * 3.6) + "kmph";
    humidityP.innerText = "Humidity: " + data.main.humidity + "%";
    pressureH.innerText = "Pressure: " + parseFloat((data.main.pressure / 1013.25).toFixed(3)) + "atm";
    feels.innerText = "Feels like: " + parseInt(data.main.feels_like) + "°C";
    
}

