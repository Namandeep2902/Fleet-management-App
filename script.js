function login(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (email === "admin@gmail.com" && password === "admin123")
    {
        window.location.href="dashboard.html";
    }
    else
    {
        alert("Wrong email or password");
    }
}
let fleet = [];
function addVehicle()
{
    let name = document.getElementById("vehicleName").value;
    let type = document.getElementById("vehicleType").value;
    
}