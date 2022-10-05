let lat = 33.44;
let lon = -94.04;
let apiKey = '853b994ee17156b4e3e23f959a8880b6';
let searchResultHeader = document.querySelector(".display-4");


// temp wind humidity
let searchBtn = document.querySelector(".input-group-text");
searchBtn.addEventListener("click", searchWeather)
function searchWeather(){
let userInput = document.querySelector(".form-control").value;
let current_temp = document.querySelector(".current-temp");
let current_wind = document.querySelector(".current-wind");
let current_humidity = document.querySelector(".current-humidity");
let current_uv = document.querySelector(".current-uv");
let dayOneTemp = document.querySelector(".Day-One-Title");
let dayTwoTemp = document.querySelector(".Day-Two-Title");
let dayThreeTemp = document.querySelector(".Day-Three-Title");
let dayFourTemp = document.querySelector(".Day-Four-Title");
let dayFiveTemp = document.querySelector(".Day-Five-Title");
let dayOneWind = document.querySelector(".Day-One-Wind");
let dayTwoWind = document.querySelector(".Day-Two-Wind");
let dayThreeWind = document.querySelector(".Day-Three-Wind");
let dayFourWind = document.querySelector(".Day-Four-Wind");
let dayFiveWind = document.querySelector(".Day-Five-Wind");
let dayOneHumidity = document.querySelector(".Day-One-Humidity");
let dayTwoHumidity = document.querySelector(".Day-Two-Humidity");
let dayThreeHumidity = document.querySelector(".Day-Three-Humidity");
let dayFourHumidity = document.querySelector(".Day-Four-Humidity");
let dayFiveHumidity = document.querySelector(".Day-Five-Humidity");


searchResultHeader.textContent = userInput;

fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${userInput}&appid=${apiKey}`)
.then(function (response) {
    
    return response.json()
    
})
.then(function (cityData){
    
    
    console.log(cityData[0].lat);
    console.log(cityData[0].lon);
    
    return {lat:cityData[0].lat, lon: cityData[0].lon}
    
})
.then(function(latLonData){
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latLonData.lat}&lon=${latLonData.lon}&appid=${apiKey}&units=Imperial`)
    .then(function (response) {
        
        return response.json()
        
    })
    .then(function (data) {
        current_temp.textContent = "temp: " + data.current.temp
        current_wind.textContent = "wind: " + data.current.wind_speed
        current_humidity.textContent = "humidity: " + data.current.humidity
        current_uv.textContent = "uv: " + data.current.uvi

        dayOneTemp.textContent = "temp: " + data.daily[1].temp.day
        dayTwoTemp.textContent = "temp: " + data.daily[2].temp.day
        dayThreeTemp.textContent = "temp: " + data.daily[3].temp.day
        dayFourTemp.textContent = "temp: " + data.daily[4].temp.day
        dayFiveTemp.textContent = "temp: " + data.daily[5].temp.day

        dayOneWind.textContent = "wind: " + data.daily[1].wind_speed
        dayTwoWind.textContent = "wind: " + data.daily[2].wind_speed
        dayThreeWind.textContent = "wind: " + data.daily[3].wind_speed
        dayFourWind.textContent = "wind: " + data.daily[4].wind_speed
        dayFiveWind.textContent = "wind: " + data.daily[5].wind_speed

        dayOneHumidity.textContent = "humidity: " + data.daily[1].humidity
        dayTwoHumidity.textContent = "humidity: " + data.daily[2].humidity
        dayThreeHumidity.textContent = "humidity: " + data.daily[3].humidity
        dayFourHumidity.textContent = "humidity: " + data.daily[4].humidity
        dayFiveHumidity.textContent = "humidity: " + data.daily[5].humidity
        console.log(userInput);
            console.log(data);
    
    
        })



})
}














