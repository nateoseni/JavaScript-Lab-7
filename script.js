const mouseButton = document.getElementById('btn');
mouseButton.addEventListener("mouseover", () => {
    mouseButton.style.backgroundColor = "red";
    mouseButton.style.color = "white";
    mouseButton.textContent = "I love you";
});

mouseButton.addEventListener("mouseout", () => {
    mouseButton.style.backgroundColor = "lightgray";
    mouseButton.style.color = "black";
    mouseButton.textContent = "Come back";
    setTimeout(() => {
        mouseButton.textContent = "Hover me";
    }, 3000);
});

const keyInput = document.getElementById('keyboardInput');
keyInput.addEventListener("keydown", (event) => {
    console.log(`Key pressed: ${event.key}`);
});

keyInput.addEventListener("input", (event) => {
    document.getElementById('inputDisplay').textContent = event.target.value;
});

const blurFocus = document.getElementById('focusInput');
blurFocus.addEventListener("focus", () => {
    blurFocus.style.backgroundColor = "lightblue";
});

blurFocus.addEventListener("blur", () => {
    blurFocus.style.border = "1px solid magenta";
});

const submitForm = document.getElementById('myForm');
submitForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Form submitted!");
});

const clickButton = document.getElementById('btnContainer');
clickButton.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        document.getElementById('eventMessage').textContent = `${event.target.textContent} clicked!`; 
    }
}); 