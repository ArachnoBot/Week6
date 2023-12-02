document.getElementById("submitVehicle").addEventListener("click", sendVehicle)

function sendVehicle() {
    modelText = document.getElementById("model").value
    
    data = {
        model: modelText,
        color: "Red",
        year: 1993,
        power: 60,
        wingspan: 69
    }

    fetch("/vehicle/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    modelText = ""
}