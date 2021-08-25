window.addEventListener('load', (event) => {    
     
     var location = "61710"; 

     var bloomList = [
          {link: 'https://www.bloomingtonparks.org/facilities/miller-park-zoo', name: "Miller Park Zoo", high: 95, low: 75},
          {link: 'https://www.gradysfunpark.com/', name: "Grady's Family Fun Park", high: 95, low: 75}, 
          {link: 'https://prairieaviationmuseum.org/', name: 'Prairie Aviation Museum', high: 95, low: 75},
          {link: 'https://www.childrensdiscoverymuseum.net/', name: "Children's Discovery Museum"},
          {link: 'https://mchistory.org/', name: 'McLean County Museum of History'},
          {link: 'https://insideoutartcoop.org/', name: 'Inside Out: Accessible Art Gallery and Cooperative'}
      ];  

      var bloomlinkObj = {cityLink: 'Bloomlink1', cityList: bloomList};
    
      return getWeather(location, bloomlinkObj); 
});
