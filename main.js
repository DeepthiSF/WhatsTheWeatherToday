

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
    let hightemp = document.getElementById("highTemp");
    let lowtemp = document.getElementById("lowTemp");

    locationname.innerText = resultObj.name;
    hightemp.innerText = resultObj.main.temp_max;
    lowtemp.innerText = resultObj.main.temp_min;
}
});



