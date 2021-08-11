
//var apiKey = "6e06812aeffe12f5ac01e38127f2c4fe";
var locationname = document.getElementById("locationName");
var hightemp = document.getElementById("highTemp");
var lowtemp = document.getElementById("lowTemp");
var currenttemp = document.getElementById("curTemp");
var countryname = document.getElementById("countryName");
var description = document.getElementById("description");
var windspeed = document.getElementById("windspeed");
var humidity = document.getElementById("humidity");
var todayweather = document.getElementById("weather");


function getWeather(location) {
    var apiKey = "6e06812aeffe12f5ac01e38127f2c4fe";
    if (!isNaN(location)) {
        locationkey = "zip";
        //console.log("this is a zipcode");
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

    //locationname.innerText = resultObj.name;
    hightemp.innerText = Math.round(resultObj.main.temp_max) + '℉';
    lowtemp.innerText = Math.round(resultObj.main.temp_min) + '℉';
    currenttemp.innerText = Math.round(resultObj.main.temp) + '℉';
    countryname.innerText = resultObj.sys.country;
    description.innerText = resultObj.weather[0].description;
    windspeed.innerText = resultObj.wind.speed + 'mph';
    humidity.innerText = resultObj.main.humidity;
    todayweather.innerText = "Today's Weather at " + resultObj.name + ":";
    // var img = new Image(100, 100); 
    // var div = document.getElementById("weathericon");
    // img.src = 'http://openweathermap.org/img/w/' + resultObj.weather[0].icon + '.png';
    // div.appendChild(img);
    var img = document.createElement('img');
    var imgicon = resultObj.weather[0].icon;
    img.src = 'http://openweathermap.org/img/w/' + imgicon + '.png';
    document.getElementById('weathericon').appendChild(img);

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

        fetch('https://api.openweathermap.org/data/2.5/weather?' + locationkey + '=' + location + '&appid=' + apiKey)
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

        fetch('https://api.openweathermap.org/data/2.5/weather?' + locationkey + '=' + location + '&units=imperial&appid=' + apiKey)
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

function getAtlantaWeather() {
    var apiKey = "6e06812aeffe12f5ac01e38127f2c4fe";
    // if (!isNaN(location)) {
    //     locationkey = "zip";
    //     //console.log("this is a zipcode");
    // } else {
    //locationkey = "q"
    //}

    // if (location != "") {

    fetch('https://api.openweathermap.org/data/2.5/weather?zip=30346&units=imperial&appid=' + apiKey)
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
            return displayAtlantaOutput(resultObj);

        })

}

function displayAtlantaOutput(resultObj) {
    hightemp.innerText = Math.round(resultObj.main.temp_max) + '℉';
    lowtemp.innerText = Math.round(resultObj.main.temp_min) + '℉';
    currenttemp.innerText = Math.round(resultObj.main.temp) + '℉';
    countryname.innerText = resultObj.sys.country;
    description.innerText = resultObj.weather[0].description;
    windspeed.innerText = resultObj.wind.speed + 'mph';
    humidity.innerText = resultObj.main.humidity;
    todayweather.innerText = "Today's Weather at " + resultObj.name + "'s" + " Hub" + ":";

    var img = document.createElement('img');
    var imgicon = resultObj.weather[0].icon;
    img.src = 'http://openweathermap.org/img/w/' + imgicon + '.png';
    document.getElementById('weathericon').appendChild(img);

    // Adding the activities links to the page
    var currenttempNew = document.getElementById("curTemp").innerText.slice(0, -1);
    var currentTempNumber = parseInt(currenttempNew);
    var atlantaActivities = document.getElementById('Atlantalink1');

    if (currentTempNumber >= 100) {

        var a1 = document.createElement('a')
        var a1LinkText = document.createTextNode('Atlanta Zoo')
        a1.appendChild(a1LinkText)
        a1.href = 'https://zooatlanta.org/'
        a1.title = "Atlanta Zoo"
        atlantaActivities.appendChild(a1)
        var linebreak1 = document.createElement('br')
        atlantaActivities.appendChild(linebreak1)

        var a2 = document.createElement('a')
        var a2LinkText = document.createTextNode('Stone Mountain Park')
        a2.appendChild(a2LinkText)
        a2.href = 'https://www.stonemountainpark.com/'
        a2.title = "Stone Mountain Park"
        atlantaActivities.appendChild(a2)
        var linebreak2 = document.createElement('br')
        atlantaActivities.appendChild(linebreak2)

        var a3 = document.createElement('a')
        var a3LinkText = document.createTextNode('Atlanta Motor Speedway')
        a3.appendChild(a3LinkText)
        a3.href = 'https://www.atlantamotorspeedway.com/'
        a3.title = "Atlanta Motor Speedway"
        atlantaActivities.appendChild(a3)

    } else {
        var b1 = document.createElement('a')
        var b1LinkText = document.createTextNode('Georgia Aquarium')
        b1.appendChild(b1LinkText)
        b1.href = 'https://www.georgiaaquarium.org/'
        b1.title = "Georgia Aquarium"
        atlantaActivities.appendChild(b1)
        var linebreak3 = document.createElement('br')
        atlantaActivities.appendChild(linebreak3)

        var b2 = document.createElement('a')
        var b2LinkText = document.createTextNode('Civil and Human Rights Museum')
        b2.appendChild(b2LinkText)
        b2.href = 'https://www.civilandhumanrights.org/'
        b2.title = "Civil and Human Rights Museum"
        atlantaActivities.appendChild(b2)
        var linebreak4 = document.createElement('br')
        atlantaActivities.appendChild(linebreak4)

        var b3 = document.createElement('a')
        var b3LinkText = document.createTextNode('Atlanta United Soccer Team at Mercedes Benz Stadium')
        b3.appendChild(b3LinkText)
        b3.href = 'https://www.atlutd.com/'
        b3.title = "Atlanta United Soccer Team at Mercedes Benz Stadium"
        atlantaActivities.appendChild(b3)
        var linebreak5 = document.createElement('br')
        atlantaActivities.appendChild(linebreak5)


        var b4 = document.createElement('a')
        var b4LinkText = document.createTextNode('Atlanta Hawks at State Farm Arena')
        b4.appendChild(b4LinkText)
        b4.href = 'https://www.nba.com/hawks/'
        b4.title = "Atlanta Hawks at State Farm Arena"
        atlantaActivities.appendChild(b4)
    

    }
    

}


