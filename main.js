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
    
    return getWeather(location);
 
//   .then(response => {
//         console.log(response);
//     })
//         .catch(err => {
//             console.error(err);
//         });


});


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





