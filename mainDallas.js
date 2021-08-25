window.addEventListener('load', (event) => {
    
     var location = "75243";
     
     var dallasList = [
          {link: 'https://www.texasmotorspeedway.com/', name: "Texas Motor Speedway", high: 95, low: 75},
          {link: 'https://www.fortworthstockyards.org/', name: "Stockyards Championship Rodeo", high: 95, low: 75}, 
          {link: 'https://www.dallasarboretum.org/', name: 'Dallas Arboretum Botanical Garden', high: 95, low: 75},
          {link: 'https://dwazoo.com/', name: "The Dallas World Aquarium"},
          {link: 'https://www.legolanddiscoverycenter.com/dallas-fw/', name: 'Legoland Discovery Center'},
          {link: 'https://www.perotmuseum.org/', name: 'Perot Museum of Nature & Science'}
      ];  

      var dallaslinkObj = {cityLink: 'Dallaslink1', cityList: dallasList};
    
     return getWeather(location, dallaslinkObj);
});
