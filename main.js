

var btn = document.getElementById('Form');
var apiKey = "6e06812aeffe12f5ac01e38127f2c4fe";

btn.addEventListener('click', function (event) {
    event.preventDefault();
    //alert('addEventListner is working') // just a check
    var location = document.getElementById('location').value;
    if(!isNaN(location)){
        locationkey = "zip";
        //console.log("this is a zipcode");
    } else {
        locationkey = "q"
    }

    if (location != "") {
        // Used the OpenWeathermap for API - https://openweathermap.org/current
        fetch('http://api.openweathermap.org/data/2.5/weather?' + locationkey + '=' + location + '&units=imperial&appid=' + apiKey)
            .then(function (response) {
                if (response.ok) {
                    console.log(response);
                    return response.json();
                }
            })
            .then(function (result) {
                jsonFile = result;
                console.log(jsonFile);
                return jsonFile;
            })
            .then((data)=> {
                var resultObj = data;
                return displayOutput(resultObj);
                
            })
            
            
    }

 
//   .then(response => {
//         console.log(response);
//     })
//         .catch(err => {
//             console.error(err);
//         });

function displayOutput(resultObj){

    let locationname = document.getElementById("locationName");
    let currenttemp = document.getElementById("currentTemp");
    let hightemp = document.getElementById("highTemp");
    let lowtemp = document.getElementById("lowTemp");
    let windspeed = document.getElementById("windspeed");
    let description = document.getElementById("description");
    let humidity = document.getElementById("humidity");
    let country = document.getElementById("countryName")
    
    locationname.innerText =resultObj.name;
    hightemp.innerText = resultObj.main.temp_max;
    lowtemp.innerText = resultObj.main.temp_min;
    currenttemp.innerText = resultObj.main.temp;
    windspeed.innerText = resultObj.wind.speed +' mph';
    description.innerText = resultObj.weather[0].description;
    humidity.innerText = resultObj.main.humidity;
    country.innerText = resultObj.sys.country;
}
});



