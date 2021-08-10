
//var apiKey = "6e06812aeffe12f5ac01e38127f2c4fe";

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
    return displayOutput(resultObj);
}

function displayOutput(resultObj) {

    let locationname = document.getElementById("locationName");
    let hightemp = document.getElementById("highTemp");
    let lowtemp = document.getElementById("lowTemp");

    locationname.innerText = resultObj.name;
    hightemp.innerText = resultObj.main.temp_max;
    lowtemp.innerText = resultObj.main.temp_min;
}


