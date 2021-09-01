var welcomeName = document.getElementById("welcomeName");
var cuurentIndex = JSON.parse(localStorage.getItem("cuurentIndex"));
var coordinatesContainer = JSON.parse(localStorage.getItem("coordinatesList"));
welcomeName.innerHTML = `welcome ${coordinatesContainer[cuurentIndex].name}`; 