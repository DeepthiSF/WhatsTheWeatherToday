

var btn = document.getElementById('Form');
var apiKey = "6e06812aeffe12f5ac01e38127f2c4fe";

btn.addEventListener('click', function () {
    //alert('addEventListner is working') // just a check
    var location = document.getElementById('location').value;
    // if(!isNaN(location)){
    //     q = "zip";
    //     //console.log("this is a zipcode");
    // } else {
    //     q = "city"
    // }

    if (location != "") {
        fetch('api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + apiKey)
            .then(function (response) {
                if (response.ok) {
                    console.log(response);
                    return response.json();
                }
            })
            .then(function (result) {
                jsonFile = result;
                console.log(jsonFile);
            })
    }









//     fetch("https://dark-sky.p.rapidapi.com/%7Blatitude%7D,%7Blongitude%7D?lang=en&units=auto", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "70fdfa338dmsh78263e645b22582p190398jsn05f91265c237",
// 		"x-rapidapi-host": "dark-sky.p.rapidapi.com"
// 	}
// })
 
  .then(response => {
        console.log(response);
    })
        .catch(err => {
            console.error(err);
        });


});

