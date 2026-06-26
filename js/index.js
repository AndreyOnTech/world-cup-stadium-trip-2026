
const map = createMap();

createMarkers(map, stadiums);

const connections = createConnections(map, stadiums);

document.querySelectorAll(".execute-btn").forEach(button => {

    button.addEventListener("click", () => {

        handleExecute(button.dataset.algorithm);

    });

});

function handleExecute(algorithmName) {

    const solver = solvers[algorithmName];

    const result = solver({
        stadiums
    });

    console.log(result);
}

