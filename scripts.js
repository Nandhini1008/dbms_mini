// scripts.js

document.getElementById("search-form").onsubmit = function (e) {
    e.preventDefault();
    let name = document.getElementById("search-name").value;
    let equipment_id = document.getElementById("search-id").value;
    
    fetch(`/search_equipment?name=${name}&equipment_id=${equipment_id}`)
        .then(response => response.json())
        .then(data => {
            let resultDiv = document.getElementById("search-results");
            if (data.length > 0) {
                resultDiv.innerHTML = data.map(item => 
                    `<p>ID: ${item.equipment_id}, Name: ${item.name}, Quantity: ${item.quantity}</p>`
                ).join("");
            } else {
                resultDiv.innerHTML = "<p>No equipment found.</p>";
            }
        });
};

document.getElementById("request-form").onsubmit = function (e) {
    e.preventDefault();
    let equipment_id = document.getElementById("request-equipment-id").value;
    let room_requested = document.getElementById("request-room").value;

    fetch('/request_use', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ equipment_id: equipment_id, room_requested: room_requested, requested_by: 1 })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("request-result").innerText = data.message;
    });
};

function requestEquipmentUse(equipmentId, roomRequested, requestedBy) {
    fetch('/request_use', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            equipment_id: equipmentId,
            room_requested: roomRequested,
            requested_by: requestedBy
        })
    })
    .then(response => response.json())
    .then(data => {
        // Display confirmation message
        alert(data.message);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


document.getElementById("add-equipment-form").onsubmit = function (e) {
    e.preventDefault();
    let name = document.getElementById("equipment-name").value;
    let quantity = document.getElementById("equipment-quantity").value;
    let threshold = document.getElementById("equipment-threshold").value;
    let condition = document.getElementById("equipment-condition").value;

    fetch('/add_equipment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name, quantity: quantity, threshold: threshold, condition: condition })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("add-result").innerText = data.message;
    });
};
