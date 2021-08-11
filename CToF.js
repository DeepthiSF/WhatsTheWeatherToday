
//var apiKey = "6e06812aeffe12f5ac01e38127f2c4fe";
var locationname = document.getElementById("locationName");
var hightemp = document.getElementById("highTemp");
var lowtemp = document.getElementById("lowTemp");
var currenttemp = document.getElementById("curTemp");
var countryname = document.getElementById("countryName");
var description = document.getElementById("description");
var windspeed = document.getElementById("windspeed");
var humidity = document.getElementById("humidity");

function getWeather(location) {
    var apiKey = "6e06812aeffe12f5ac01e38127f2c4fe";
    if (!isNaN(location)) {
        locationkey = "zip";
        //console.log("this is a zipcode");
    } else {
        locationkey = "q"
    }

    if (location != "") {

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
            .then((data) => {
                var resultObj = data;
                return displayOutput(resultObj);
            })
    }
    //return displayOutput(resultObj);
}

function displayOutput(resultObj) {

    // let locationname = document.getElementById("locationName");
    // let hightemp = document.getElementById("highTemp");
    // let lowtemp = document.getElementById("lowTemp");  

    locationname.innerText = resultObj.name;
    hightemp.innerText = Math.round(resultObj.main.temp_max) + '℉';
    lowtemp.innerText = Math.round(resultObj.main.temp_min) + '℉';
    currenttemp.innerText = Math.round(resultObj.main.temp) + '℉';
    countryname.innerText = resultObj.sys.country;
    description.innerText = resultObj.weather[0].description;
    windspeed.innerText = resultObj.wind.speed + 'mph';
    humidity.innerText = resultObj.main.humidity;
    var img = new Image(); 
    var div = document.getElementById("weathericon");
    img.src = resultObj.weather[0].icon;
    div.innerHTML = img;
    //img.src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png' width=100px>"; 
    
}

function tempToFah(location) {

    var apiKey = "6e06812aeffe12f5ac01e38127f2c4fe";
    if (!isNaN(location)) {
        locationkey = "zip";
        //console.log("this is a zipcode");
    } else {
        locationkey = "q"
    }

    if (location != "") {

        fetch('http://api.openweathermap.org/data/2.5/weather?' + locationkey + '=' + location + '&appid=' + apiKey)
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
            .then((data) => {
                var resultObj1 = data;
                var max_temp = resultObj1.main.temp_max;
                var min_temp = resultObj1.main.temp_max;
                var current_temp = resultObj1.main.temp;

                hightemp.innerText = Math.round(((max_temp - 273.15) * 1.8) + 32) + '℉';
                lowtemp.innerText = Math.round(((min_temp - 273.15) * 1.8) + 32) + '℉';
                currenttemp.innerText = Math.round(((current_temp - 273.15) * 1.8) + 32) + '℉';
            })
    }

    
}

function tempToCel(location) {

    var apiKey = "6e06812aeffe12f5ac01e38127f2c4fe";
    if (!isNaN(location)) {
        locationkey = "zip";
        //console.log("this is a zipcode");
    } else {
        locationkey = "q"
    }

    if (location != "") {

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
            .then((data) => {
                var resultObj1 = data;
                var max_temp = resultObj1.main.temp_max;
                var min_temp = resultObj1.main.temp_max;
                var current_temp = resultObj1.main.temp;

                hightemp.innerText = Math.round((max_temp - 32) * 5 / 9) + '℃';
                lowtemp.innerText = Math.round((min_temp - 32) * 5 / 9) + '℃';
                currenttemp.innerText = Math.round((current_temp - 32) * 5 / 9) + '℃';
            })
    }

    
}


