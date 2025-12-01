//your JS code here. If required.
const inputs = document.querySelectorAll(".code");

// Focus the first input on load
inputs[0].focus();

inputs.forEach((input, index) => {

    input.addEventListener("input", (e) => {
        const value = e.target.value;

        // Allow only 1 digit
        if (value.length > 1) {
            input.value = value.charAt(0);
        }

        // Move to next input if digit entered
        if (value !== "" && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {
            
            // If field has a digit → clear it
            if (input.value !== "") {
                input.value = "";
                return; 
            }

            // If empty → move back
            if (index > 0) {
                inputs[index - 1].focus();
            }
        }
    });
});
