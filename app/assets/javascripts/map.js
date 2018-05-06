var map;

function initMap() {
  getLocation();
  console.log("initializing map sequence");
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.50884, lng: -73.58781},
      zoom: 10
  });
}


function initMap(naturalDisaster) {
  getLocation();
  console.log("initializing map sequence");
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.50884, lng: -73.58781},
      zoom: 17
  });
  switch(naturalDisaster) {
	case 'flood':
	  map.data.loadGeoJson(//flood
   		'http://donnees.ville.montreal.qc.ca/dataset/3603f75a-1963-4130-9fc5-ab3e7272211a/resource/a9d76fa3-a1cb-408d-902d-80a7c418993d/download/vulnerabilitecrues2016.geojson');
		break;
	case 'rain':
	  map.data.loadGeoJson(//rain
	    'http://donnees.ville.montreal.qc.ca/dataset/3603f75a-1963-4130-9fc5-ab3e7272211a/resource/024b0de8-adfd-4493-b9c7-7a773da83439/download/vulnerabilitepluiesabondantes2016.geojson');
	  	break;
  	case 'drought':
	  map.data.loadGeoJson(//drought
	    'http://donnees.ville.montreal.qc.ca/dataset/3603f75a-1963-4130-9fc5-ab3e7272211a/resource/60798ffd-2dc8-4b32-8030-775fd855c87d/download/vulnerabilitesecheresses2016.geojson');
	  	break;
  	case 'heatwave':
	  map.data.loadGeoJson(//heatwave
	    'http://donnees.ville.montreal.qc.ca/dataset/3603f75a-1963-4130-9fc5-ab3e7272211a/resource/522f81dd-8429-4548-906b-fba5ecbd020c/download/vulnerabilitevagueschaleur2016.geojson');
	  	break;
  	case 'storm':
      $.getJSON('http://donnees.ville.montreal.qc.ca/dataset/3603f75a-1963-4130-9fc5-ab3e7272211a/resource/82344dbf-e102-4152-9523-7bfeb1d15e2d/download/vulnerabilitetempetesdestructrices2016.json', function(data){
        geojson = {
                    type: "FeatureCollection",
                    features: [],
                  };
        for (i = 0; i < data.features.length; i++) {
          geojson.features.push({
            "type": "Feature",
            "properties": {
              "NOM_ARR": data.features[i].attributes.NOM_ARR,
              "VULN_CAT": data.features[i].attributes.VULN_CAT
            },
            "geometry": {
              "type": "Polygon",
              "coordinates": [data.features[i].geometry.rings[0][0]]
            }
          });

          for (j = 1; j < data.features[i].geometry.rings[0].length; j++){
            geojson.features[i].geometry.coordinates.push(data.features[i].geometry.rings[0][j]);
                // "coordinates": data.features[i].geometry.rings[0][j]

            }
          }
          console.log(geojson);
          map.data.loadGeoJson(geojson);

        })
        break;
      }

	    //'http://donnees.ville.montreal.qc.ca/dataset/3603f75a-1963-4130-9fc5-ab3e7272211a/resource/82344dbf-e102-4152-9523-7bfeb1d15e2d/download/vulnerabilitetempetesdestructrices2016.json');


  map.data.setStyle(function(features) {
    var VULN_CAT = features.getProperty('VULN_CAT');
    switch(VULN_CAT) {
      case 'Élevée':
        var color='red';
        break;
      case 'Modérée':
        var color='orange'
        break;
      case 'Mineure':
        var color='yellow'
        break;
      default:
        var color='green'
    }
    return {
      fillColor: color,
      strokeWeight: 0.5
    };
  });
}
