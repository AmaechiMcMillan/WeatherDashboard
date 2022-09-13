let lat = 33.44;
let lon = -94.04;
let apiKey = '72d0adda79a4c922f5ddfc0788d12b1a'



fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`)
.then(function (response) {

    return response.json()

})
.then(function (data){

    console.log(data);

})