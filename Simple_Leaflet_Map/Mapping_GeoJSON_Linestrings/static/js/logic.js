// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// Create the map object with a center and zoom level.
let map = L.map("mapid").setView([30,30], 2);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"14",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};


// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport,
//     {
//         // we turn each feature int a marker on the map.
//         //pointToLayer: function(feature, latlng)
//         // {
//         //    // console.log(feature);

//         //     console.log(latlng);
//         //     return L.marker(latlng)
//         //     .bindPopup("<h2>" + feature.properties.city + "</h2>");
//         // }

//         onEachFeature: function(feature, layer)
//         {
//             console.log(layer);
//             layer.bindPopup("<h2>" + "Airport code:" + feature.properties.icao
//              + "</h2> <hr> <h2>" + "Airport name:" + feature.properties.name);
//         }



//     }).addTo(map);




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


// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/shawnkitagawa/Mapping_Earthquakes2/Mapping_GeoJSON_Points/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data)
{
    console.log(data);
    // creating a GeoJSON layer with the retrieved data.
    L.geoJSON(data,
        {
            onEachFeature: function(feature, layer)
            {
                console.log(layer);
                layer.bindPopup("<h2>" + "Airport code:" + feature.properties.icao
             + "</h2> <hr> <h2>" + "Airport name:" + feature.properties.name);
            }
        }).addTo(map);
});

