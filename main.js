

var btn = document.getElementById('Form');
var apiKey = "6e06812aeffe12f5ac01e38127f2c4fe";

btn.addEventListener('click', function (event) {
    event.preventDefault();
    //alert('addEventListner is working') // just a check
    var location = document.getElementById('location').value;
    // if(!isNaN(location)){
    //     q = "zip";
    //     //console.log("this is a zipcode");
    // } else {
    //     q = "city"
    // }

    if (location != "") {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + apiKey)
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
            .then((data)=> {
                return displayOutput(data)
            })
            
    }

 
//   .then(response => {
//         console.log(response);
//     })
//         .catch(err => {
//             console.error(err);
//         });


});

function displayOutput(data){

}

