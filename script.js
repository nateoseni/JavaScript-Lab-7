const mouseButton = document.getElementById('btn');
mouseButton.addEventListener("mouseover", () => {
    mouseButton.style.backgroundColor = "red";
    mouseButton.style.color = "white";
});

mouseButton.addEventListener("mouseout", () => {
    mouseButton.style.backgroundColor = "white";
    mouseButton.style.color = "black";
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