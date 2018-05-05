var map;

function initMap() {
  console.log("initializing map sequence");
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.50884, lng: -73.58781},
    zoom: 10
  });
}
