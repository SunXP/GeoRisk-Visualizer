/**
 * Created by SunXP on 2018-05-05.
 */

//Natural disaster identifiers
 const FLOOD = "flood";
 const RAIN = "rain";
 const DROUGHT = "drought";
 const HEATWAVE = "heatwave";
 const STORM = "storm";

//GET LOCATION OF USER

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

//SHOW POSITION OF USER
function showPosition(position) {
    //alert("Latitude: " + position.coords.latitude +
      //  "Longitude: " + position.coords.longitude);
}

//ERROR HANDLING FOR LOCATION
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
    }
}

//RENDER MAP

$(document).ready(function(){
    $('#vulnerability-selection input[type=radio]').click(function(){
        retrieveRelevantData(this.id);
    });
});

function retrieveRelevantData(naturalDisaster) {
  alert(naturalDisaster);
  initMap(naturalDisaster);
}

//USER CHECKS RISK OPTIONS AND CALLS BACKEND
function doAction(choice) {
    var x = choice.value;
    if (choice.checked) {
        alert(x + " enabled");
    }
    else {
        alert(x + " disabled");
    }
}
