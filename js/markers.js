function createMarkers(map, stadiums) {

    const stadiumIcon = L.icon({
        iconUrl: './images/stadium.png',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });

    stadiums.forEach(stadium => {

        L.marker(
            [stadium.lat, stadium.lng],
            { icon: stadiumIcon }
        )
        .addTo(map)
        .bindPopup(`
            <b>${stadium.name}</b><br>
            ${stadium.city}<br>
            ${stadium.country}
        `);

    });
}