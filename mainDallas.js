var btn = document.getElementById('Form');
var apiKey = "6e06812aeffe12f5ac01e38127f2c4fe";

var tmpbtn = document.getElementById("tempbtn");

var celciusBtn = document.getElementById('c');
var fahBtn = document.getElementById('f');

var locationname = document.getElementById("locationName");
var hightemp = document.getElementById("highTemp");
var lowtemp = document.getElementById("lowTemp");
var currenttemp = document.getElementById("curTemp");

window.addEventListener('load', (event) => {
    
     return getDallasWeather();    
        
});






