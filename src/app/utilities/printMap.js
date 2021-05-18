import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

function printMap (lng, lat) {
  mapboxgl.accessToken = "pk.eyJ1IjoiZ2lvcmVuIiwiYSI6ImNrb3F4b2piMjB6djIyeW51MXRrNDlibnAifQ.Xrh4UH-0RwRGCRPRxl-EpA";
  const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [lng, lat], // starting position [lng, lat]
      zoom: 9 // starting zoom
  });
}

export { printMap }