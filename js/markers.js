function createMarkers(map, stadiums) {

    const stadiumIcon = L.icon({
        iconUrl: './images/stadium.png',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });

    const travelIcon = L.icon({
        iconUrl: './images/travel-and-tourism.png',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });

    let currentTravelMarker = null;
    let currentTravelPosition = null;
    const clickedStadiums = new Set();
    const showConnectionsCheckbox = document.getElementById("showConnections");
    const markersByStadium = new Map();
    const redCircles = [];

    // Reset quando desmarcar o checkbox
    showConnectionsCheckbox.addEventListener('change', (e) => {
        if (!e.target.checked) {
            // Remove o marcador de viagem
            if (currentTravelMarker) {
                map.removeLayer(currentTravelMarker);
                currentTravelMarker = null;
            }

            // Remove os círculos vermelhos
            redCircles.forEach(circle => map.removeLayer(circle));
            redCircles.length = 0;

            // Reseta o estado
            clickedStadiums.clear();
            currentTravelPosition = null;
        }
    });

    stadiums.forEach(stadium => {

        const popup = L.popup().setContent(`
            <b>${stadium.name}</b><br>
            ${stadium.city}<br>
            ${stadium.country}
        `);

        const marker = L.marker(
            [stadium.lat, stadium.lng],
            { icon: stadiumIcon }
        )
            .addTo(map);

        markersByStadium.set(stadium.name, marker);

        marker.on('click', function (e) {

            if (showConnectionsCheckbox.checked) {
                // Se já foi clicado, não faz nada
                if (clickedStadiums.has(stadium.name)) {
                    return;
                }

                // Marca como clicado
                clickedStadiums.add(stadium.name);

                // Define posição inicial se não existir
                if (!currentTravelPosition) {
                    currentTravelPosition = [stadium.lat, stadium.lng];
                    currentTravelMarker = L.marker(
                        currentTravelPosition,
                        { icon: travelIcon }
                    ).addTo(map);
                } else {
                    // Anima o carro até o novo estádio
                    animateMarker(currentTravelMarker, currentTravelPosition, [stadium.lat, stadium.lng], 2000);
                    currentTravelPosition = [stadium.lat, stadium.lng];
                }

                // Adiciona quadrado vermelho no estádio clicado
                const redCircle = L.circleMarker(
                    [stadium.lat, stadium.lng],
                    {
                        radius: 25,
                        fillColor: '#ff0000',
                        color: '#8b0000',
                        weight: 3,
                        opacity: 0.8,
                        fillOpacity: 0.3
                    }
                ).addTo(map);
                redCircles.push(redCircle);

            } else if (!e.originalEvent.ctrlKey) {
                return;
            } else {
                popup
                    .setLatLng(marker.getLatLng())
                    .openOn(map);
            }

        });

    });

    // Função para animar o marcador
    function animateMarker(marker, from, to, duration) {
        const startLat = from[0];
        const startLng = from[1];
        const endLat = to[0];
        const endLng = to[1];

        const startTime = Date.now();
        const latDiff = endLat - startLat;
        const lngDiff = endLng - startLng;

        function animate() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const currentLat = startLat + latDiff * progress;
            const currentLng = startLng + lngDiff * progress;

            marker.setLatLng([currentLat, currentLng]);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }

        animate();
    }
}