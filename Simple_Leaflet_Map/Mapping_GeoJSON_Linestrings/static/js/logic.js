// Add console.log to check to see if our code is working.
console.log("working");




// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/street-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// We create the tile layer that will be the background of our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps =
{
    "Streets": streets,
    "Satellite Streets": satelliteStreets
};

let map = L.map("mapid",
{
    center: [43.7,-79.3],
    zoom: 11,
    layers: [satelliteStreets]




});

// Pass our map layers int our layer control and add the layer control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the Tronto neighborhoods GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/shawnkitagawa/Mapping_Earthquakes2/Mapping_GeoJSON_Polygons/Simple_Leaflet_Map/Mapping_Geo_JSON_Polygons/torontoNeighborhoods.json";

// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data)
{
    // Creating a GEOJSON layer with the retrieved data.
    L.geoJSON(data,
        {
            fillcolor: 'yellow',
            weight: 1,
            onEachFeature: function(feature, layer)
            {
                layer.bindPopup("<h2>" + "Neiborhood:" + feature.properties.AREA_NAME + 
                "</h2>");
            }



        }).addTo(map);
})
