const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator_theme = document.querySelector(".calculator");

themeToggleBtn.addEventListener("click", (e) => {
    calculator_theme.classList.toggle("light");
});

// Alternate way of doing above
// themeToggleBtn.onclick = () => {
//   calculator_theme.classList.toggle("dark");
// };

const input = document.querySelector(".input");
const output = document.querySelector(".output");
const buttons = document.querySelectorAll("button"); // Array of all elements of type button

// Function to stop execution for 2 seconds and clear the innerText for output and result
function timeOut() {
    // Personal Tip: setTimeout function automatically created when typing first few letters
    setTimeout(function () {
        input.innerText = "";
        output.innerText = "";
    }, 1000);
}

//  Calls the function 'button' for each element in the array and the button function runs the 'addEventListener' which calls the calculate function
// buttons.forEach(function(button){button.addEventListener("click", calculate);});

// Alternate and easier way
for (let i = 0; i <= buttons.length; i++) {
    buttons[i].addEventListener("click", calculate);
}

function calculate() {
    // 'this' represents the object that called the function which in this case is the buttons (Since we used 'BUTTONS'[i].addeventlistner)
    let buttonText = this.innerText; // 'this' gives the html format of the button, the innerText gives the number contained within the tag
    if (buttonText === "C") {
        input.innerText = "Cleared";
        output.innerText = "0";
        timeOut();
        // clears the animations so that the animations can be re-used
        input.style.animation = "";
        output.style.animation = "";
        return;
    }

    if (buttonText === "↩") {
        input.textContent = input.textContent.substring(0, input.textContent.length - 1);
        return;
    }

    if (buttonText === "=") {
        // try-catch statement that alerts user for invalid inputs
        try {
            output.innerText = eval(input.innerText);
        } catch (error) {
            alert("Unable to Calculate");
            input.innerText = "Error";
            timeOut();
        }

        // animations
        output.style.animation = "big 0.3s ease-in-out";
        input.style.animation = "small 0.3s ease-in-out";
        output.style.animationFillMode = "forwards"; // makes the animations stay and not go back to original size
        input.style.animationFillMode = "forwards";
    } else {
        input.textContent += buttonText;
        return;
    }
}
