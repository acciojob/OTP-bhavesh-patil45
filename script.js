const inputs = document.querySelectorAll(".code");

// Focus first input
document.getElementById("code-1").focus();

inputs.forEach((input, index) => {

    input.addEventListener("input", () => {
        if (input.value.length > 1) {
            input.value = input.value.slice(0, 1);
        }

        if (input.value !== "" && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {

            if (input.value !== "") {
                input.value = "";
                return;
            }

            if (index > 0) {
                inputs[index - 1].focus();
            }
        }
    });
});
