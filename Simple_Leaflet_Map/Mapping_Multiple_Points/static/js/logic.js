// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map("mapid").setView([37.6214, -122.3790], 5);


// coordinates for each point to be used inthe polyline
let line = [
    //SFO
    [37.6213129, -122.3789554],
    [30.1974292, -97.6663058],
    [43.67771760000001, -79.62481969999999],
    [40.6435529, -73.78211390000001]
  ];

//create a polyline using the line coordinates and make the line red.

L.polyline(line,
    {
        color: "blue",
        opacity: 0.5,
        weight: 4,
        dashArray: 9
    }).addTo(map);







// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


