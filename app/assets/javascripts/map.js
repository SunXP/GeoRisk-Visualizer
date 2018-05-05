var map;

function initMap(userLat, userLong) {
  console.log("initializing map sequence");
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: userLat, lng: userLong},
    zoom: 15,
    gestureHandling: 'greedy'
  });
}
