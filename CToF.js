
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
    todayweather.innerText = "Today's Weather at " + resultObj.name + " Hub" + ":";

    var img = document.createElement('img');
    var imgicon = resultObj.weather[0].icon;
    img.src = 'http://openweathermap.org/img/w/' + imgicon + '.png';
    document.getElementById('weathericon').appendChild(img);

    // Adding the activities links to the page
    var currenttempNew = document.getElementById("curTemp").innerText.slice(0, -1);
    var currentTempNumber = parseInt(currenttempNew);
    var atlantaActivities = document.getElementById('Atlantalink1');

    if (currentTempNumber >= 75) {

        var a1 = document.createElement('a')
        var a1LinkText = document.createTextNode('Atlanta Zoo test ')
        a1.appendChild(a1LinkText)
        a1.href = 'https://zooatlanta.org/'
        a1.title = "Atlanta Zoo"
        atlantaActivities.appendChild(a1)
        var linebreak1 = document.createElement('br');
        atlantaActivities.appendChild(linebreak1);
    }

}

function getDallasWeather() {
    var apiKey = "6e06812aeffe12f5ac01e38127f2c4fe";
    // if (!isNaN(location)) {
    //     locationkey = "zip";
    //     //console.log("this is a zipcode");
    // } else {
    //locationkey = "q"
    //}

    // if (location != "") {

    fetch('https://api.openweathermap.org/data/2.5/weather?zip=75082&units=imperial&appid=' + apiKey)
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
            return displayDallasOutput(resultObj);

        })

}

function displayDallasOutput(resultObj) {
    hightemp.innerText = Math.round(resultObj.main.temp_max) + '℉';
    lowtemp.innerText = Math.round(resultObj.main.temp_min) + '℉';
    currenttemp.innerText = Math.round(resultObj.main.temp) + '℉';
    countryname.innerText = resultObj.sys.country;
    description.innerText = resultObj.weather[0].description;
    windspeed.innerText = resultObj.wind.speed + 'mph';
    humidity.innerText = resultObj.main.humidity;
    todayweather.innerText = "Today's Weather at Dallas Hub";

    var img = document.createElement('img');
    var imgicon = resultObj.weather[0].icon;
    img.src = 'http://openweathermap.org/img/w/' + imgicon + '.png';
    document.getElementById('weathericon').appendChild(img);

    // Adding the activities links to the page
    var currenttempNew1 = document.getElementById("curTemp").innerText.slice(0, -1);
    var currentTempNumber1 = parseInt(currenttempNew1);
    var dallasActivities = document.getElementById('Dallaslink1');

    if (currentTempNumber1 >= 75) {

        var d1 = document.createElement('a')
        var d1LinkText = document.createTextNode('Texas Motor Speedway')
        d1.appendChild(d1LinkText)
        d1.href = 'https://www.texasmotorspeedway.com/'
        d1.title = "Texas Motor Speedway"
        dallasActivities.appendChild(d1)
        var dlinebreak1 = document.createElement('br');
        dallasActivities.appendChild(dlinebreak1);

        var d2 = document.createElement('a')
        var d2LinkText = document.createTextNode('Stockyards Championship Rodeo')
        d2.appendChild(d2LinkText)
        d2.href = 'https://www.fortworthstockyards.org/'
        d2.title = "Stockyards Championship Rodeo"
        dallasActivities.appendChild(d2)
        var dlinebreak2 = document.createElement('br');
        dallasActivities.appendChild(dlinebreak2);

        var d3 = document.createElement('a')
        var d3LinkText = document.createTextNode('Dallas Arboretum Botanical Garden')
        d3.appendChild(d3LinkText)
        d3.href = 'https://www.dallasarboretum.org/'
        d3.title = "Dallas Arboretum Botanical Garden"
        dallasActivities.appendChild(d3)
        var dlinebreak3 = document.createElement('br');
        dallasActivities.appendChild(dlinebreak3);
    } else {
        var dc1 = document.createElement('a')
        var dc1LinkText = document.createTextNode('The Dallas World Aquarium')
        dc1.appendChild(dc1LinkText)
        dc1.href = ' https://dwazoo.com/'
        dc1.title = "The Dallas World Aquarium"
        dallasActivities.appendChild(dc1)
        var dlinebreak4 = document.createElement('br');
        dallasActivities.appendChild(dlinebreak4);

        var dc2 = document.createElement('a')
        var dc2LinkText = document.createTextNode('The Dallas Cowboys Football')
        dc2.appendChild(dc2LinkText)
        dc2.href = 'https://www.dallascowboys.com/'
        dc2.title = "The Dallas Cowboys Football"
        dallasActivities.appendChild(dc2)
        var dlinebreak5 = document.createElement('br');
        dallasActivities.appendChild(dlinebreak5);

        var dc3 = document.createElement('a')
        var dc3LinkText = document.createTextNode('Perot Museum of Nature & Science')
        dc3.appendChild(dc3LinkText)
        dc3.href = ' https://www.perotmuseum.org/'
        dc3.title = "Perot Museum of Nature & Science"
        dallasActivities.appendChild(dc3)
        var dlinebreak6 = document.createElement('br');
        dallasActivities.appendChild(dlinebreak7);
    }
}
