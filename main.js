var btn = document.getElementById('Form');
var celciusBtn = document.getElementById('c');
var fahBtn = document.getElementById('f');
var errorMessage = document.getElementById('errorname');

btn.addEventListener('submit', function (event) {
  event.preventDefault();
  var location = document.getElementById('location').value;

  if ((document.getElementById("searchOutputData").hasAttribute('hidden') === false )) {
        document.getElementById("searchOutputData").setAttribute("hidden", true); 
        errorMessage.innerText = '';
      } else {
   errorMessage.innerText = '';
  }
  
  return getWeather(location);
  //return covertToFah(location);
});

document.getElementById("f").addEventListener("click", function (event) {
  event.preventDefault();
  var location = document.getElementById('location').value;
  //return tempToFah(location);
  return covertToFah(location);
});

document.getElementById("c").addEventListener("click", function (event) {
  event.preventDefault();
  var location = document.getElementById('location').value;
  //return tempToCel(location);
  return covertToCel(location);
});





