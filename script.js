let lat = 33.44;
let lon = -94.04;
let apiKey = 'b783a74ee2f13afc2bb030d11bd281e5'
let cityName = "Dallas"

fetch('http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid={apiKey}')
.then(function (response) {

    return response.json()

})
.then(function (cityData){

    console.log(cityData[0].lat);
    console.log(cityData[0].lon);
    

})



fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`)
.then(function (response) {

    return response.json()

})
.then(function (data){

    console.log(data);

})