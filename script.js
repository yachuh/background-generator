const css = document.querySelector("h3")
const color1 = document.querySelector(".color1")
const color2 = document.querySelector(".color2")
const body = document.querySelector("body")
const p1 = document.querySelector(".c1")
const p2 = document.querySelector(".c2")
const buttonRandom = document.querySelector(".random")
const buttonReset = document.querySelector(".reset")
const buttonSwitch = document.querySelector(".switch")

// Load the default color & capture value
window.onload = setGradient();
const orgcolor1 = color1.value;
const orgcolor2 = color2.value;

// function declaration
function setGradient () {
    body.style.background = `linear-gradient(90deg, ${color1.value}, ${color2.value})`;
    p1.innerHTML = color1.value;
    p2.innerHTML = color2.value;
    css.textContent = body.style.background + ";";
}

function switchGradient (){
    var a = color1.value;
    var b = color2.value;
    color1.value = b;
    color2.value = a;
    setGradient();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
 
function setGradientRandom (){
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    setGradient();
}

function resetGradient (){
    color1.value = orgcolor1;
    color2.value = orgcolor2;
    setGradient();
}

// color picker
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// button event
buttonRandom.addEventListener("click", setGradientRandom);
buttonSwitch.addEventListener("click", switchGradient);
buttonReset.addEventListener("click", resetGradient);