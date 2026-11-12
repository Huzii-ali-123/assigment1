// Show the welcome message when the visitor clicks the button.
document.getElementById("welcome-button").addEventListener("click", function () {
    document.getElementById("welcome-message").textContent = "Welcome to KIT North Nazimabad! We are glad you are here.";
});

// Keep the sample inquiry on this page and show a simple confirmation.
document.getElementById("inquiry-form").addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("form-message").textContent = "Thank you! Your sample inquiry is ready.";
});
