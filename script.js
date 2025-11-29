function login(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (email === "admin@gmail.com" && password === "admin123")
    {
        window.location.href="admin.html";
    }
    else
    {
        alert("Wrong email or password");
    }
}
let fleet = [];
function addVehicle()
{
    let reg = document.getElementById("reg").value;
    let type = document.getElementById("vehicleType").value;
    let driver = document.getElementById("driverName").value;
    let available = document.getElementById("available").checked;
    if(reg === ""|| driver === "")
    {
        alert("Please fill all the required fields");
        return;
    }
    let vehicle = {
        reg,type,driver,available
    };
    fleet.push(vehicle);
    displayVehicles();
    }
    function displayVehicles()
    {
        let Container = document.getElementById("fleetContainer");
        Container.innerHTML = "";
        fleet.forEach((vehicle,index) =>
        {
            let card = document.createElement("div");
            card.className ="card";
            card.innerHTML =`
            <h3>${vehicle.type} - ${vehicle.reg}</h3>
            <p><b>Driver:</b> ${vehicle.driver}</p>
              <p><b>Status:</b> ${vehicle.available ? "Available":"Unavailable"}</p>
              <button onclick ="updateDriver(${index})">Update Driver</button>
              <button onclick ="toggleAvailabiltiy(${index})">Change Status</button>
              <button onclick="deleteVehicle(${index})"">Delete</button>`;
              Container.appendChild(card);
        });
    }
    function updateDriver(index)
    {
        let newDriver = prompt("Enter new Driver Name:");
        if(newDriver)
        {
            fleet[index].driver = newDriver;
                displayVehicles();
        }
    }
    function changeAvailablity(index)
    {
        fleet[index].available = !fleet[index].available;
        displayVehicles();
    }
    function deleteVehicle(index)
    {
        fleet.splice(index,1);
        displayVehicles();
    }
