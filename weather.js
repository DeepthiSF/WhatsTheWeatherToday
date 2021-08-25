var locationname = document.getElementById("locationName");
var hightemp = document.getElementById("highTemp");
var lowtemp = document.getElementById("lowTemp");
var currenttemp = document.getElementById("curTemp");
var countryname = document.getElementById("countryName");
var description = document.getElementById("description");
var windspeed = document.getElementById("windspeed");
var humidity = document.getElementById("humidity");
var todayweather = document.getElementById("weather");
var img = document.createElement('img');
var dataDisplayCheck = document.getElementById("searchOutputData").hasAttribute("hidden");

function getWeather(location, cityLinkObj) {
    var apiKey = "6e06812aeffe12f5ac01e38127f2c4fe";
    if (!isNaN(location)) {
        locationkey = "zip";
    } else {
        locationkey = "q"
    }

    if (location != "") {

        fetch('https://api.openweathermap.org/data/2.5/weather?' + locationkey + '=' + location + '&units=imperial&appid=' + apiKey)
            .then(function (response) {

                if (response.status === 404) {
                    console.log(response);
                    errorMessage.innerText = ("Please enter a valid City name or Zipcode");
                    document.getElementById("searchOutputData").setAttribute("hidden");
                } else {
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
                return displayOutput(resultObj, cityLinkObj);
            })
    } else {
        errorMessage.innerText = ("Please enter a City name or Zipcode");
    }
}

function displayOutput(resultObj, cityLinkObj) {

    document.getElementById("searchOutputData").removeAttribute("hidden");
    hightemp.innerText = Math.round(resultObj.main.temp_max) + '℉';
    lowtemp.innerText = Math.round(resultObj.main.temp_min) + '℉';
    currenttemp.innerText = Math.round(resultObj.main.temp) + '℉';
    countryname.innerText = resultObj.sys.country;
    description.innerText = resultObj.weather[0].description;
    windspeed.innerText = resultObj.wind.speed + 'mph';
    humidity.innerText = resultObj.main.humidity;
    todayweather.innerText = "Today's Weather at " + resultObj.name + ":";
    var imgicon = resultObj.weather[0].icon;
    img.src = 'http://openweathermap.org/img/w/' + imgicon + '.png';
    document.getElementById('weathericon').appendChild(img);

    if(cityLinkObj){
        displayActivities(cityLinkObj);
    }
}

function fetchWeatherData(location) {
    var apiKey = "6e06812aeffe12f5ac01e38127f2c4fe";
    if (!isNaN(location)) {
        locationkey = "zip";
    } else {
        locationkey = "q"
    }

    if (location != "") {

        fetch('https://api.openweathermap.org/data/2.5/weather?' + locationkey + '=' + location + '&units=imperial&appid=' + apiKey)
            .then(function (response) {
                if (response.ok) {
                    console.log(response);
                    return response.json();
                } 
            })
            .then(function (result) {
                //jsonFile = result;
                console.log(result);
                return result;
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return jsonFile;
}

function convertToFah(location) {

    const resultObj1 = fetchWeatherData(location);

    var max_temp = resultObj1.main.temp_max;
    var min_temp = resultObj1.main.temp_max;
    var current_temp = resultObj1.main.temp;

    hightemp.innerText = Math.round(max_temp) + '℉';
    lowtemp.innerText = Math.round(min_temp) + '℉';
    currenttemp.innerText = Math.round(current_temp) + '℉';
}

function convertToCel(location) {
    
    const resultObj1 = fetchWeatherData(location);
    
    var max_temp = resultObj1.main.temp_max;
    var min_temp = resultObj1.main.temp_max;
    var current_temp = resultObj1.main.temp;

    hightemp.innerText = Math.round((max_temp - 32) * 5 / 9) + '℃';
    lowtemp.innerText = Math.round((min_temp - 32) * 5 / 9) + '℃';
    currenttemp.innerText = Math.round((current_temp - 32) * 5 / 9) + '℃';
}

function displayActivities (cityLinkObj){
    var currenttempNew = document.getElementById("curTemp").innerText.slice(0, -1);
    var currentTempNumber = parseInt(currenttempNew);
    var activities = document.getElementById(cityLinkObj.cityLink);
    
    for(i=0; cityLinkObj.cityList != null && i< cityLinkObj.cityList.length; i++){
    
        if((cityLinkObj.cityList[i].low != undefined) && (currentTempNumber >= cityLinkObj.cityList[i].low && currentTempNumber <= cityLinkObj.cityList[i].high)) {
        var a1 = document.createElement('a')
        var a1LinkText = document.createTextNode(cityLinkObj.cityList[i].name);
        a1.appendChild(a1LinkText)
        a1.href = cityLinkObj.cityList[i].link;
        a1.title = cityLinkObj.cityList[i].name;
        activities.appendChild(a1)
        var linebreak1 = document.createElement('br')
        activities.appendChild(linebreak1)

       } 
       else if ((cityLinkObj.cityList[i].low == undefined) && (currentTempNumber < 75 || currentTempNumber > 95))       
        {
                var a1 = document.createElement('a')
                var a1LinkText = document.createTextNode(cityLinkObj.cityList[i].name);
                a1.appendChild(a1LinkText)
                a1.href = cityLinkObj.cityList[i].link;
                a1.title = cityLinkObj.cityList[i].name;
                activities.appendChild(a1)
                var linebreak1 = document.createElement('br')
                activities.appendChild(linebreak1)
        }     
   }        
}
