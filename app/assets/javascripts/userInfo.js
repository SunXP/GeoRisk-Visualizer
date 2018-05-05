/**
 * Created by SunXP on 2018-05-05.
 */
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
    alert("Latitude: " + position.coords.latitude +
        "Longitude: " + position.coords.longitude);
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
