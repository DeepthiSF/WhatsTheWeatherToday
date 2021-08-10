var btn = document.getElementById('Form');
var apiKey = "6e06812aeffe12f5ac01e38127f2c4fe";

var tmpbtn = document.getElementById("tempbtn");

var celciusBtn = document.getElementById('c');
var fahBtn = document.getElementById('f');

var locationname = document.getElementById("locationName");
var hightemp = document.getElementById("highTemp");
var lowtemp = document.getElementById("lowTemp");
var currenttemp = document.getElementById("curTemp");



btn.addEventListener('click', function (event) {
    event.preventDefault();
    //alert('addEventListner is working') // just a check
    var location = document.getElementById('location').value;
    // if(!isNaN(location)){
    //     locationkey = "zip";
    //     //console.log("this is a zipcode");
    // } else {
    //     locationkey = "q"
    // }

    // if (location != "") {
    // Used the OpenWeathermap for API - https://openweathermap.org/current
    // fetch('http://api.openweathermap.org/data/2.5/weather?' + locationkey + '=' + location + '&units=imperial&appid=' + apiKey)
    //     .then(function (response) {
    //         if (response.ok) {
    //             console.log(response);
    //             return response.json();
    //         }
    //     })
    //     .then(function (result) {
    //         jsonFile = result;
    //         console.log(jsonFile);
    //         return jsonFile;
    //     })
    //     .then((data)=> {
    //         var resultObj = data;
    //         return displayOutput(resultObj);

    //     })
    return getWeather(location);





    //   .then(response => {
    //         console.log(response);
    //     })
    //         .catch(err => {
    //             console.error(err);
    //         });

    // function displayOutput(resultObj){

    //     let locationname = document.getElementById("locationName");
    //     let hightemp = document.getElementById("highTemp");
    //     let lowtemp = document.getElementById("lowTemp");

    //     locationname.innerText = resultObj.name;
    //     hightemp.innerText = resultObj.main.temp_max;
    //     lowtemp.innerText = resultObj.main.temp_min;
    // }

});


// tempbtn.addEventListener('submit', function (event) {
//     event.preventDefault();

//     var max_temp = resultObj.main.temp_max;
//     var min_temp = resultObj.main.temp_max;
//     var current_temp = resultObj.main.temp;

//     const rbtns = document.querySelectorAll('input[name="Temparature"]');

//     for (const rbtn of rbtns) {
//         if (rbtn.checked) {
//             console.log("Celsjusz");
//             hightemp.innerText = Math.round(max_temp * 9 / 5) + 32;
//             lowtemp.innerText = Math.round(min_temp * 9 / 5) + 32;
//             currenttemp.innerText = Math.round(current_temp * 9 / 5) + 32;
//         } else {
//             console.log("Fahrenheit");
//             hightemp.innerText = Math.round(max_temp - 32) * 5 / 9;
//             lowtemp.innerText = Math.round(min_temp - 32) * 5 / 9;
//             currenttemp.innerText = Math.round(current_temp - 32) * 5 / 9;
//         }

//     }


// });

// var max_temp = resultObj.main.temp_max;
// var min_temp = resultObj.main.temp_max;
// var current_temp = resultObj.main.temp;

document.getElementById("f").addEventListener("click", function(event){
    event.preventDefault();

    var location = document.getElementById('location').value;
    return tempToFah(location);

    // hightemp.innerText = Math.round(max_temp - 32) * 5 / 9;
    // lowtemp.innerText = Math.round(min_temp - 32) * 5 / 9;
    // currenttemp.innerText = Math.round(current_temp - 32) * 5 / 9;
});

document.getElementById("c").addEventListener("click", function(event){
    event.preventDefault();

    var location = document.getElementById('location').value;
    return tempToCel(location);

    // hightemp.innerText = Math.round(max_temp * 9 / 5) + 32;
    // lowtemp.innerText = Math.round(min_temp * 9 / 5) + 32;
    // currenttemp.innerText = Math.round(current_temp * 9 / 5) + 32;
});





