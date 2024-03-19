let map;
let marker;

let latitude = -32.0001;    //asigno un valor cualquiera cerca de Mendoza capital
let longitude = -68.0001;   //asigno un valor cualquiera cerca de Mendoza capital

function toggleMap() {
    let mapContainer = document.getElementById('map-container');
    mapContainer.classList.toggle('open');

    if (!map) {
        initMap();
    }
}

function initMap() {
    map = L.map('map').setView([-32.92833818958401, -68.82877707481386], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    map.on('click', function(event) {
        placeMarker(event.latlng);
    });
}

function placeMarker(location) {
    if (marker) {
        marker.setLatLng(location);
    } else {
        marker = L.marker(location).addTo(map);
    }

    latitude = location.lat;
    longitude = location.lng;
    console.log("Latitud: " + latitude + ", Longitud: " + longitude);   //para debug en consola.
	document.getElementById("status-display").innerHTML = "Latitud: " + latitude + ", Longitud: " + longitude;

    // Actualizar las variables latitud y longitud en el objeto 'datos'
    datos.latitud = latitude;
    datos.longitud = longitude;
}


function handleTransitionEnd() {
    if (map && document.getElementById('map-container').classList.contains('open')) {
        map.invalidateSize();
    }
}
