var btn = document.getElementById('Form');
var apiKey = "6e06812aeffe12f5ac01e38127f2c4fe";

var tmpbtn = document.getElementById("tempbtn");

var celciusBtn = document.getElementById('c');
var fahBtn = document.getElementById('f');

var locationname = document.getElementById("locationName");
var hightemp = document.getElementById("highTemp");
var lowtemp = document.getElementById("lowTemp");
var currenttemp = document.getElementById("curTemp");

btn.addEventListener('submit', function (event) {
  event.preventDefault();

  var location = document.getElementById('location').value;
  
    return getWeather(location);
});


document.getElementById("f").addEventListener("click", function (event) {
  event.preventDefault();

  var location = document.getElementById('location').value;
  return tempToFah(location);
});

document.getElementById("c").addEventListener("click", function (event) {
  event.preventDefault();

  var location = document.getElementById('location').value;
  return tempToCel(location);
});


document.getElementById("atlanta").addEventListener("click", function (event) {
  event.preventDefault();

  location.href = "indexAtlanta.html";

});

document.getElementById("dallas").addEventListener("click", function (event) {
  event.preventDefault();

  location.href = "indexDallas.html";
});



