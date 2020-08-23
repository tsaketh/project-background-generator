let color1 = document.getElementById("color-1");
let color2 = document.getElementById("color-2");
let body = document.getElementById("gradient");
let text = document.querySelector("h3");
function applyGradient() {
    body.style.background = "linear-gradient( to right, "
    +color1.value
    +", "
    +color2.value
    +")";
    text.textContent = body.style.background+";";
}
color1.addEventListener("input", applyGradient);
color2.addEventListener("input", applyGradient);