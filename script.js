let button = document.getElementById("btn");
let bodyColor = document.getElementById("body");

button.addEventListener("click", function () {
    
    console.log(bodyColor.style.background);
    
    if (bodyColor.style.background === "#0f172a") {
        
        bodyColor.style.background = "blue";
        button.style.background = "blue";
    
    } else {
        bodyColor.style.background = "red";
        button.style.background = "red";
    }
})