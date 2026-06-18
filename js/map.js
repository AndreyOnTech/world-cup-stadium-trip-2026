function createMap() {
    const map = L.map('map');

    L.tileLayer(
        'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
            attribution:
                '&copy; OpenStreetMap contributors'
        }
    ).addTo(map);

    map.fitBounds(
        stadiums.map(
            stadium => [stadium.lat, stadium.lng]
        )
    );

    return map;
}