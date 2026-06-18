function createConnections(map, stadiums) {

    const connections = [];

    for (let i = 0; i < stadiums.length; i++) {
        for (let j = i + 1; j < stadiums.length; j++) {

            const distanceKm = (
                map.distance(
                    [stadiums[i].lat, stadiums[i].lng],
                    [stadiums[j].lat, stadiums[j].lng]
                ) / 1000
            ).toFixed(0);

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

            line.bindTooltip(
                `${distanceKm} km`,
                {
                    sticky: true
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

    return connections;
}