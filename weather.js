var locationname = document.getElementById("locationName");
var hightemp = document.getElementById("highTemp");
var lowtemp = document.getElementById("lowTemp");
var currenttemp = document.getElementById("curTemp");
var countryname = document.getElementById("countryName");
var description = document.getElementById("description");
var windspeed = document.getElementById("windspeed");
var humidity = document.getElementById("humidity");
var todayweather = document.getElementById("weather");
var img = document.createElement('img');
var dataDisplayCheck = document.getElementById("searchOutputData").hasAttribute("hidden");

function getWeather(location, cityLinkObj) {
    var apiKey = "6e06812aeffe12f5ac01e38127f2c4fe";
    if (!isNaN(location)) {
        locationkey = "zip";
    } else {
        locationkey = "q"
    }

    if (location != "") {

        fetch('https://api.openweathermap.org/data/2.5/weather?' + locationkey + '=' + location + '&units=imperial&appid=' + apiKey)
            .then(function (response) {

                if (response.status === 404) {
                    console.log(response);
                    errorMessage.innerText = ("Please enter a valid City name or Zipcode");
                    document.getElementById("searchOutputData").setAttribute("hidden");
                } else {
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
                return displayOutput(resultObj, cityLinkObj);
            })
    } else {
        errorMessage.innerText = ("Please enter a City name or Zipcode");
    }
}

function displayOutput(resultObj, cityLinkObj) {

    document.getElementById("searchOutputData").removeAttribute("hidden");
    hightemp.innerText = Math.round(resultObj.main.temp_max) + '℉';
    lowtemp.innerText = Math.round(resultObj.main.temp_min) + '℉';
    currenttemp.innerText = Math.round(resultObj.main.temp) + '℉';
    countryname.innerText = resultObj.sys.country;
    description.innerText = resultObj.weather[0].description;
    windspeed.innerText = resultObj.wind.speed + 'mph';
    humidity.innerText = resultObj.main.humidity;
    todayweather.innerText = "Today's Weather at " + resultObj.name + ":";
    var imgicon = resultObj.weather[0].icon;
    img.src = 'http://openweathermap.org/img/w/' + imgicon + '.png';
    document.getElementById('weathericon').appendChild(img);

    if(cityLinkObj){
        activities(cityLinkObj);
    }
}

function fetchWeatherData(location) {
    var apiKey = "6e06812aeffe12f5ac01e38127f2c4fe";
    if (!isNaN(location)) {
        locationkey = "zip";
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
                //jsonFile = result;
                console.log(result);
                return result;
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return jsonFile;
}

function convertToFah(location) {

    const resultObj1 = fetchWeatherData(location);

    var max_temp = resultObj1.main.temp_max;
    var min_temp = resultObj1.main.temp_max;
    var current_temp = resultObj1.main.temp;

    hightemp.innerText = Math.round(max_temp) + '℉';
    lowtemp.innerText = Math.round(min_temp) + '℉';
    currenttemp.innerText = Math.round(current_temp) + '℉';
}

function convertToCel(location) {
    
    const resultObj1 = fetchWeatherData(location);
    
    var max_temp = resultObj1.main.temp_max;
    var min_temp = resultObj1.main.temp_max;
    var current_temp = resultObj1.main.temp;

    hightemp.innerText = Math.round((max_temp - 32) * 5 / 9) + '℃';
    lowtemp.innerText = Math.round((min_temp - 32) * 5 / 9) + '℃';
    currenttemp.innerText = Math.round((current_temp - 32) * 5 / 9) + '℃';
}



function displayAtlantaOutput(location) {

    var atlantaList = [
        {link: 'https://zooatlanta.org/', name: "Atlanta Zoo", high: 95, low: 75},
        {link: 'https://www.stonemountainpark.com/', name: 'Stone Mountain Park', high: 95, low: 75}, 
        {link: 'https://www.atlantamotorspeedway.com/', name: 'Atlanta Motor Speedway', high: 95, low: 75},
        {link: 'https://www.georgiaaquarium.org/', name: 'Georgia Aquarium'},
        {link: 'https://www.civilandhumanrights.org/', name: 'Civil and Human Rights Museum'},
        {link: 'https://www.atlutd.com/', name: 'Atlanta United Soccer Team at Mercedes Benz Stadium'},
        {link: 'https://www.nba.com/hawks/', name: 'Atlanta Hawks at State Farm Arena'}
    ];  

    var atlantalinkObj = {cityLink: 'Atlantalink1', cityList: atlantaList};
    
    getWeather(location, atlantalinkObj);
        
}

function activities (cityLinkObj){
    var currenttempNew = document.getElementById("curTemp").innerText.slice(0, -1);
    var currentTempNumber = parseInt(currenttempNew);
    var atlantaActivities = document.getElementById(cityLinkObj.cityLink);

    // var curTempAtlanta = resultObj1.main.temp;
    // var atlantaActivities = document.getElementById('Atlantalink1');
    for(i=0; cityLinkObj.cityList != null && i< cityLinkObj.cityList.length; i++){
       if((cityLinkObj.cityList[i].low && cityLinkObj.cityList[i].low >= currentTempNumber) && ((cityLinkObj.cityList[i].high && cityLinkObj.cityList[i].high <= currentTempNumber))) {
        var a1 = document.createElement('a')
        var a1LinkText = document.createTextNode(cityLinkObj.cityList[i].name);
        a1.appendChild(a1LinkText)
        a1.href = cityLinkObj.cityList[i].link;
        a1.title = cityLinkObj.cityList[i].name;
        atlantaActivities.appendChild(a1)
        var linebreak1 = document.createElement('br')
        atlantaActivities.appendChild(linebreak1)

       } else if ((cityLinkObj.cityList[i].low && cityLinkObj.cityList[i].low <= currentTempNumber) || ((cityLinkObj.cityList[i].high && cityLinkObj.cityList[i].high >= currentTempNumber))){
        var a1 = document.createElement('a')
        var a1LinkText = document.createTextNode(cityLinkObj.cityList[i].name);
        a1.appendChild(a1LinkText)
        a1.href = cityLinkObj.cityList[i].link;
        a1.title = cityLinkObj.cityList[i].name;
        atlantaActivities.appendChild(a1)
        var linebreak1 = document.createElement('br')
        atlantaActivities.appendChild(linebreak1)
       }
    }
       

        
}

function displayDallasOutput(location) {

    getWeather(location);

    // Adding the activities links to the page
    setTimeout(function(){
    var currenttempNew1 = document.getElementById("curTemp").innerText.slice(0, -1);
    var currentTempNumber1 = parseInt(currenttempNew1);
    var dallasActivities = document.getElementById('Dallaslink1');

    if (currentTempNumber1 >= 75 && currentTempNumber1 <= 95) {

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
  }, 1000);
}

function displayBloomOutput(location) {
    
    getWeather(location);

    // Adding the activities links to the page
    setTimeout(function(){
    var currenttempNew = document.getElementById("curTemp").innerText.slice(0, -1);
    var currentTempNumber = parseInt(currenttempNew);
    var atlantaActivities = document.getElementById('Bloomlink1');

    if (currentTempNumber >= 75 && currentTempNumber <= 95) {

        var a1 = document.createElement('a')
        var a1LinkText = document.createTextNode('Miller Park Zoo')
        a1.appendChild(a1LinkText)
        a1.href = 'https://www.bloomingtonparks.org/facilities/miller-park-zoo'
        a1.title = "Miller Park Zoo"
        atlantaActivities.appendChild(a1)
        var linebreak1 = document.createElement('br')
        atlantaActivities.appendChild(linebreak1)

        var a2 = document.createElement('a')
        var a2LinkText = document.createTextNode(`Grady's Family Fun Park`)
        a2.appendChild(a2LinkText)
        a2.href = 'https://www.gradysfunpark.com/'
        a2.title = "Grady's Family Fun Park"
        atlantaActivities.appendChild(a2)
        var linebreak2 = document.createElement('br')
        atlantaActivities.appendChild(linebreak2)

        var a3 = document.createElement('a')
        var a3LinkText = document.createTextNode('Prairie Aviation Museum')
        a3.appendChild(a3LinkText)
        a3.href = 'https://prairieaviationmuseum.org/'
        a3.title = "Prairie Aviation Museum"
        atlantaActivities.appendChild(a3)

    } else {
        var b1 = document.createElement('a')
        var b1LinkText = document.createTextNode(`Children's Discovery Museum`)
        b1.appendChild(b1LinkText)
        b1.href = 'https://www.childrensdiscoverymuseum.net/'
        b1.title = "Children's Discovery Museum"
        atlantaActivities.appendChild(b1)
        var linebreak3 = document.createElement('br')
        atlantaActivities.appendChild(linebreak3)

        var b2 = document.createElement('a')
        var b2LinkText = document.createTextNode('McLean County Museum of History')
        b2.appendChild(b2LinkText)
        b2.href = 'https://mchistory.org/'
        b2.title = "McLean County Museum of History"
        atlantaActivities.appendChild(b2)
        var linebreak4 = document.createElement('br')
        atlantaActivities.appendChild(linebreak4)

        var b3 = document.createElement('a')
        var b3LinkText = document.createTextNode('Inside Out: Accessible Art Gallery and Cooperative')
        b3.appendChild(b3LinkText)
        b3.href = 'https://insideoutartcoop.org/'
        b3.title = "Inside Out: Accessible Art Gallery and Cooperative"
        atlantaActivities.appendChild(b3)
        var linebreak5 = document.createElement('br')
        atlantaActivities.appendChild(linebreak5);
    }
 }, 1000);
}

function displayPhoenixOutput(location) {
    
    getWeather(location);

    // Adding the activities links to the page
    setTimeout(function(){
    var currenttempNew = document.getElementById("curTemp").innerText.slice(0, -1);
    var currentTempNumber = parseInt(currenttempNew);
    var atlantaActivities = document.getElementById('phoenixlink1');

    if (currentTempNumber >= 75 && currentTempNumber <= 95) {

        var a1 = document.createElement('a')
        var a1LinkText = document.createTextNode('Desert Botanical Garden')
        a1.appendChild(a1LinkText)
        a1.href = 'https://dbg.org/'
        a1.title = "Desert Botanical Garden"
        atlantaActivities.appendChild(a1)
        var linebreak1 = document.createElement('br')
        atlantaActivities.appendChild(linebreak1)

        var a2 = document.createElement('a')
        var a2LinkText = document.createTextNode(`Phoenix Zoo`)
        a2.appendChild(a2LinkText)
        a2.href = 'https://www.phoenixzoo.org/'
        a2.title = "Phoenix Zoo"
        atlantaActivities.appendChild(a2)
        var linebreak2 = document.createElement('br')
        atlantaActivities.appendChild(linebreak2)

        var a3 = document.createElement('a')
        var a3LinkText = document.createTextNode('Papago Park')
        a3.appendChild(a3LinkText)
        a3.href = 'https://www.phoenix.gov/parks/trails/locations/papago-park'
        a3.title = "Papago Park"
        atlantaActivities.appendChild(a3)

    } else {
        var b1 = document.createElement('a')
        var b1LinkText = document.createTextNode(`OdySea Aquarium`)
        b1.appendChild(b1LinkText)
        b1.href = 'https://www.odyseaaquarium.com/'
        b1.title = "OdySea Aquarium"
        atlantaActivities.appendChild(b1)
        var linebreak3 = document.createElement('br')
        atlantaActivities.appendChild(linebreak3)

        var b2 = document.createElement('a')
        var b2LinkText = document.createTextNode('Musical Instrument Museum')
        b2.appendChild(b2LinkText)
        b2.href = 'https://mim.org/?utm_source=Google&utm_medium=Google%20My%20Business'
        b2.title = "Musical Instrument Museum"
        atlantaActivities.appendChild(b2)
        var linebreak4 = document.createElement('br')
        atlantaActivities.appendChild(linebreak4);

        var b3 = document.createElement('a')
        var b3LinkText = document.createTextNode('Heard Museum')
        b3.appendChild(b3LinkText)
        b3.href = 'https://heard.org/'
        b3.title = "Heard Museum"
        atlantaActivities.appendChild(b3)
        var linebreak5 = document.createElement('br')
        atlantaActivities.appendChild(linebreak5)
    }
 }, 1000);
}