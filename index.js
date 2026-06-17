const stadiums =
    [
        {
            "name": "BC Place",
            "city": "Vancouver",
            "country": "Canada",
            "capacity": 54500,
            "lat": 49.2768,
            "lng": -123.1119
        },
        {
            "name": "BMO Field",
            "city": "Toronto",
            "country": "Canada",
            "capacity": 45000,
            "lat": 43.6332,
            "lng": -79.4186
        },
        {
            "name": "Estadio Azteca",
            "city": "Mexico City",
            "country": "Mexico",
            "capacity": 87523,
            "lat": 19.3029,
            "lng": -99.1505
        },
        {
            "name": "Estadio Akron",
            "city": "Guadalajara",
            "country": "Mexico",
            "capacity": 49850,
            "lat": 20.6829,
            "lng": -103.4623
        },
        {
            "name": "Estadio BBVA",
            "city": "Monterrey",
            "country": "Mexico",
            "capacity": 53500,
            "lat": 25.6692,
            "lng": -100.2447
        },
        {
            "name": "Mercedes-Benz Stadium",
            "city": "Atlanta",
            "country": "USA",
            "capacity": 71000,
            "lat": 33.7554,
            "lng": -84.4009
        },
        {
            "name": "Gillette Stadium",
            "city": "Boston",
            "country": "USA",
            "capacity": 65878,
            "lat": 42.0909,
            "lng": -71.2643
        },
        {
            "name": "AT&T Stadium",
            "city": "Dallas",
            "country": "USA",
            "capacity": 80000,
            "lat": 32.7473,
            "lng": -97.0945
        },
        {
            "name": "NRG Stadium",
            "city": "Houston",
            "country": "USA",
            "capacity": 72220,
            "lat": 29.6847,
            "lng": -95.4107
        },
        {
            "name": "Arrowhead Stadium",
            "city": "Kansas City",
            "country": "USA",
            "capacity": 76416,
            "lat": 39.0489,
            "lng": -94.4839
        },
        {
            "name": "SoFi Stadium",
            "city": "Los Angeles",
            "country": "USA",
            "capacity": 70240,
            "lat": 33.9535,
            "lng": -118.3392
        },
        {
            "name": "Hard Rock Stadium",
            "city": "Miami",
            "country": "USA",
            "capacity": 65326,
            "lat": 25.9580,
            "lng": -80.2389
        },
        {
            "name": "MetLife Stadium",
            "city": "New York / New Jersey",
            "country": "USA",
            "capacity": 82500,
            "lat": 40.8135,
            "lng": -74.0745
        },
        {
            "name": "Lincoln Financial Field",
            "city": "Philadelphia",
            "country": "USA",
            "capacity": 69596,
            "lat": 39.9008,
            "lng": -75.1675
        },
        {
            "name": "Levi's Stadium",
            "city": "San Francisco Bay Area",
            "country": "USA",
            "capacity": 68500,
            "lat": 37.4030,
            "lng": -121.9700
        },
        {
            "name": "Lumen Field",
            "city": "Seattle",
            "country": "USA",
            "capacity": 69000,
            "lat": 47.5952,
            "lng": -122.3316
        }
    ]

const map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


const connections = [];

for (let i = 0; i < stadiums.length; i++) {
    for (let j = i + 1; j < stadiums.length; j++) {

        const line = L.polyline(
            [
                [stadiums[i].lat, stadiums[i].lng],
                [stadiums[j].lat, stadiums[j].lng]
            ],
            {
                weight: 1,
                opacity: 0.3
            }
        );

        connections.push(line);
    }
}

document
    .getElementById("showConnections")
    .addEventListener("change", (event) => {

        if (event.target.checked) {
            connections.forEach(line => line.addTo(map));
        } else {
            connections.forEach(line => map.removeLayer(line));
        }

    });

const stadiumIcon = L.icon({
    iconUrl: './images/stadium.png',
    iconSize: [32, 32],      // largura, altura
    iconAnchor: [16, 32],    // ponto que encosta no mapa
    popupAnchor: [0, -32]    // posição do popup
});

stadiums.forEach(stadium => {
    L.marker([stadium.lat, stadium.lng],
        { icon: stadiumIcon }
    )
        .addTo(map)
        .bindPopup(`
                    <b>${stadium.name}</b><br>
                    ${stadium.city}<br>
                    ${stadium.country}
                `);


});

map.fitBounds(
    stadiums.map(s => [s.lat, s.lng])
);