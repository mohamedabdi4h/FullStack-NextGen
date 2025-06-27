const clicked = document.getElementById("clicked");

clicked.addEventListener("click", () => {
    alert("Hi there Clicked!")
});


// Submit
const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Form submitted!");
});

// keyUp
const input = document.getElementById("input");
input.addEventListener("keyup", (event) => {
    console.log("Key pressed:", event.key);
});

//mouseOver 
const hoverElement = document.getElementById("hoverElement");
hoverElement.addEventListener("mouseover", () => {
    hoverElement.style.backgroundColor = "lightblue";
});

// mouseOut
hoverElement.addEventListener("mouseout", () => {
    hoverElement.style.backgroundColor = "";
});
// mouseMove
document.addEventListener("mousemove", (event) => {
    console.log(`Mouse position: X=${event.clientX}, Y=${event.clientY}`);
});

// mouseEnter
const mouseEnterElement = document.getElementById("mouseEnterElement");
mouseEnterElement.addEventListener("mouseenter", () => {
    mouseEnterElement.style.border = "2px solid red";
});

// mouseLeave
mouseEnterElement.addEventListener("mouseleave", () => {
    mouseEnterElement.style.border = "";
});

// focus
const focusInput = document.getElementById("focusInput");
focusInput.addEventListener("focus", () => {
    focusInput.style.backgroundColor = "lightyellow";
});
// blur
focusInput.addEventListener("blur", () => {
    focusInput.style.backgroundColor = "";
});