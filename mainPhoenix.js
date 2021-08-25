window.addEventListener('load', (event) => {
    
     var location = "85281";

     var phoenixList = [
          {link: 'https://dbg.org/', name: "Desert Botanical Garden", high: 95, low: 75},
          {link: 'https://www.phoenixzoo.org/', name: "Phoenix Zoo", high: 95, low: 75}, 
          {link: 'https://www.phoenix.gov/parks/trails/locations/papago-park', name: 'Papago Park', high: 95, low: 75},
          {link: 'https://www.odyseaaquarium.com/', name: "OdySea Aquarium"},
          {link: 'https://mim.org/', name: 'Musical Instrument Museum'},
          {link: 'https://heard.org/', name: 'Heard Museum'}
      ]; 
      
      var phoenixlinkObj = {cityLink: 'phoenixlink1', cityList: phoenixList};
    
      return getWeather(location, phoenixlinkObj);      
});
