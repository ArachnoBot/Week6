document.getElementById("submitVehicle").addEventListener("click", sendVehicle)

function sendVehicle() {
    data = {
        "model": "Boring generic vehicle",
        "color": "Red",
        "year": 1993,
        "power": 60
    }

    fetch("/vehicle/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
}