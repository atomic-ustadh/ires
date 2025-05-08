// Saves respnse in the "userName" variable. Uses "Anonympus" when no response
function authenticate() {
    let userName = prompt("What is your name?");
    if (userName) {
        document.getElementById("user").innerText = "Welcome back, " + userName + "!";
    } else {
        document.getElementById("user").innerText = "Welcome back, Anonymous!";
    }
}

/* Just dummy stats
let total_orders = 120;
document.getElementById("totalOrders").innerText = total_orders;

let in_stock = 45;
document.getElementById("inStock").innerText = in_stock;

let re_view = 8;
document.getElementById("review").innerText = re_view;
*/

// functioned Dummy stats
function summary(){
    let total_orders = 120;
    let in_stock = 45;
    let re_view = 8;

    document.getElementById("totalOrders").innerHTML = total_orders;
    document.getElementById("inStock").innerHTML = in_stock;
    document.getElementById("review").innerHTML = re_view;
}


//For the copyright section
let currentDate = new Date();
document.getElementById("theDate").innerHTML = "Copyright@IRES" + currentDate.getFullYear();