window.addEventListener('load', (event) => {

     var location = "30346";
     
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

     return getWeather(location, atlantalinkObj);           
});






